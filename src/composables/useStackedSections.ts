import { nextTick, onBeforeUnmount, onMounted, ref, type Ref } from "vue";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export type SceneMeta = {
  id: string;
  label: string;
};

const DESKTOP_QUERY = "(min-width: 768px)";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Drives the "stacked scenes" scroll experience used on the Experience page.
 *
 * - On desktop, each scene pins in place while the next one slides over it;
 *   the outgoing card scales down, blurs and fades for a sense of depth
 *   instead of a flat cut.
 * - On mobile/short viewports, scenes just reveal in normal document flow
 *   (no pin) — pinning tall content on small screens is usually what makes
 *   a "stacked" pattern feel janky rather than premium.
 * - Breakpoint switching is handled with gsap.matchMedia(), so resizing the
 *   window across the desktop breakpoint cleanly tears down and rebuilds the
 *   right set of animations instead of leaving stale ScrollTriggers around
 *   from a `isDesktop()` check made once at setup time.
 * - `prefers-reduced-motion` still gets full dot-nav / active-scene
 *   tracking (previously it silently got nothing), it just skips the
 *   pin/scale/parallax/snap choreography.
 */
export function useStackedSections(root: Ref<HTMLElement | null>) {
  const activeIndex = ref(0);
  const progress = ref(0); // 0→1 through the whole stacked area — wire up a progress bar with it if you want one

  let ctx: gsap.Context | null = null;
  let mm: ReturnType<typeof gsap.matchMedia> | null = null;
  let cachedScenes: HTMLElement[] = [];
  let suppressIndexTracking = false;
  let keydownHandler: ((event: KeyboardEvent) => void) | null = null;

  function getScenes(forceRefresh = false) {
    if (!root.value) return [];
    if (forceRefresh || cachedScenes.length === 0) {
      cachedScenes = Array.from(
        root.value.querySelectorAll<HTMLElement>("[data-scene]"),
      );
    }
    return cachedScenes;
  }

  function setup() {
    const el = root.value;
    if (!el) return;

    const items = getScenes(true);
    if (items.length < 2) return;

    const reduced = prefersReducedMotion();

    ctx = gsap.context(() => {
      // --- Shared across all breakpoints & motion preferences: which scene
      // is "active" (for the dot nav), and each card's one-time entrance. ---
      items.forEach((scene, index) => {
        scene.style.zIndex = String(index + 1);

        ScrollTrigger.create({
          trigger: scene,
          start: "top 55%",
          end: "bottom 45%",
          onToggle: (self) => {
            if (self.isActive && !suppressIndexTracking) {
              activeIndex.value = index;
            }
          },
        });

        const card = scene.querySelector<HTMLElement>(".scene-card");
        if (card && !reduced) {
          gsap.from(card.children, {
            y: 24,
            opacity: 0,
            stagger: 0.045,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: scene,
              start: "top 80%",
              toggleActions: "play none none none",
              once: true,
            },
          });
        }
      });

      // Overall scroll progress through the stacked area, for an optional
      // thin progress bar in the template — cheap, a single ScrollTrigger.
      ScrollTrigger.create({
        trigger: items[0],
        endTrigger: items[items.length - 1],
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          progress.value = self.progress;
        },
      });

      if (reduced) return; // no pin, no parallax, no snap for reduced-motion users

      // --- Breakpoint-specific staging, cleanly rebuilt on resize ---
      mm = gsap.matchMedia();

      mm.add({ isDesktop: DESKTOP_QUERY }, (context) => {
        const { isDesktop } = context.conditions as { isDesktop: boolean };

        items.forEach((scene, index) => {
          const card = scene.querySelector<HTMLElement>(".scene-card");
          const next = items[index + 1];
          if (!card || !next) return;

          const fitsViewport = scene.offsetHeight <= window.innerHeight + 16;
          const shouldPin = isDesktop && fitsViewport;

          gsap.fromTo(
            card,
            { scale: 1, opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" },
            {
              scale: 0.9,
              opacity: 0,
              y: shouldPin ? -56 : -20,
              rotateX: shouldPin ? -6 : 0,
              filter: shouldPin ? "blur(4px)" : "blur(0px)",
              transformPerspective: 900,
              transformOrigin: "center top",
              force3D: true,
              ease: "none",
              scrollTrigger: {
                trigger: scene,
                start: shouldPin ? "top top" : "bottom bottom",
                endTrigger: next,
                end: "top top",
                pin: shouldPin,
                pinSpacing: false,
                scrub: shouldPin ? 0.6 : 0.35,
                anticipatePin: shouldPin ? 1 : 0,
                invalidateOnRefresh: true,
                // snaps straight to the end state on fast scroll instead of
                // visibly "catching up" — makes flick-scrolling feel crisp
                fastScrollEnd: true,
              },
            },
          );
        });

        if (isDesktop) {
          ScrollTrigger.create({
            trigger: el,
            start: "top top",
            end: "bottom bottom",
            snap: {
              snapTo: (value) => {
                const max = ScrollTrigger.maxScroll(window);
                if (!max) return value;
                const points = items.map((scene) =>
                  gsap.utils.clamp(0, 1, scene.offsetTop / max),
                );
                return gsap.utils.snap(points, value);
              },
              duration: { min: 0.25, max: 0.6 },
              delay: 0.06,
              ease: "power3.inOut",
            },
          });
        }
      });
    }, el);

    // Smooths out scroll momentum/jank on touch devices, especially with
    // pinned sections — this is the single biggest lever for feeling
    // "buttery" on iOS Safari in particular. Note this affects the whole
    // document's scroll while active, not just this section — fine for a
    // full-bleed page like this, worth a second look if you add nested
    // scrollable overlays elsewhere on the same view.
    if (!reduced) {
      ScrollTrigger.normalizeScroll(true);
    }

    requestAnimationFrame(() => ScrollTrigger.refresh());

    // Re-measure once web fonts / images have settled, since offsetTop and
    // offsetHeight (used for pin-fit + snap-point math) shift as they load.
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }
    if (document.readyState === "complete") {
      ScrollTrigger.refresh();
    } else {
      window.addEventListener("load", () => ScrollTrigger.refresh(), {
        once: true,
      });
    }
  }

  function goToScene(index: number) {
    const items = getScenes();
    const target = items[index];
    if (!target) return;

    const reduced = prefersReducedMotion();
    const distance = Math.abs(target.getBoundingClientRect().top);
    // nearby scenes snap quickly, far-away ones get a touch more time —
    // reads as more natural than one fixed duration for every jump
    const duration = reduced
      ? 0
      : gsap.utils.clamp(
          0.4,
          1.1,
          gsap.utils.mapRange(0, window.innerHeight * 4, 0.45, 1.1, distance),
        );

    // While the programmatic scroll is in flight, ignore the ScrollTrigger
    // onToggle callbacks for scenes we're passing through — otherwise the
    // dot nav flickers across every intermediate scene before landing.
    suppressIndexTracking = true;
    activeIndex.value = index;

    gsap.to(window, {
      duration,
      scrollTo: { y: target, offsetY: 0 },
      ease: "power3.inOut",
      onComplete: () => {
        suppressIndexTracking = false;
      },
    });
  }

  function onKeydown(event: KeyboardEvent) {
    if (!root.value) return;

    const focused = event.target as HTMLElement | null;
    if (focused && /^(INPUT|TEXTAREA|SELECT)$/.test(focused.tagName)) return;
    if (focused?.isContentEditable) return;

    // only hijack arrow/page keys while the stacked section is actually on screen
    const rect = root.value.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (!inView) return;

    const items = getScenes();
    const last = items.length - 1;

    switch (event.key) {
      case "ArrowDown":
      case "PageDown":
        event.preventDefault();
        goToScene(Math.min(activeIndex.value + 1, last));
        break;
      case "ArrowUp":
      case "PageUp":
        event.preventDefault();
        goToScene(Math.max(activeIndex.value - 1, 0));
        break;
      case "Home":
        event.preventDefault();
        goToScene(0);
        break;
      case "End":
        event.preventDefault();
        goToScene(last);
        break;
    }
  }

  /** Call after the scene list changes shape (e.g. dynamic data) to re-measure. */
  function refresh() {
    getScenes(true);
    ScrollTrigger.refresh();
  }

  onMounted(async () => {
    await nextTick();
    setup();
    keydownHandler = onKeydown;
    window.addEventListener("keydown", keydownHandler);
  });

  onBeforeUnmount(() => {
    if (keydownHandler) window.removeEventListener("keydown", keydownHandler);
    mm?.revert();
    ctx?.revert();
    ScrollTrigger.normalizeScroll(false);
    ctx = null;
    mm = null;
  });

  return { activeIndex, progress, goToScene, refresh };
}
