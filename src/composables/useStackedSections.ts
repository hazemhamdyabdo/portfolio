import {
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  type Ref,
} from "vue";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export type SceneMeta = {
  id: string;
  label: string;
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isDesktop() {
  return window.matchMedia("(min-width: 768px)").matches;
}

export function useStackedSections(root: Ref<HTMLElement | null>) {
  const activeIndex = ref(0);
  let ctx: gsap.Context | null = null;

  function scenes() {
    if (!root.value) return [];
    return Array.from(root.value.querySelectorAll<HTMLElement>("[data-scene]"));
  }

  function setup() {
    const el = root.value;
    if (!el || prefersReducedMotion()) return;

    const items = scenes();
    if (items.length < 2) return;

    ctx = gsap.context(() => {
      items.forEach((scene, index) => {
        scene.style.zIndex = String(index + 1);
        const card = scene.querySelector<HTMLElement>(".scene-card");
        const next = items[index + 1];

        ScrollTrigger.create({
          trigger: scene,
          start: "top 55%",
          end: "bottom 45%",
          onToggle: (self) => {
            if (self.isActive) activeIndex.value = index;
          },
        });

        if (card) {
          gsap.from(card.children, {
            y: 28,
            opacity: 0,
            stagger: 0.05,
            duration: 0.55,
            ease: "power2.out",
            scrollTrigger: {
              trigger: scene,
              start: "top 78%",
              toggleActions: "play none none none",
              once: true,
            },
          });
        }

        if (!card || !next) return;

        const fitsViewport = scene.offsetHeight <= window.innerHeight + 16;
        const shouldPin = isDesktop() && fitsViewport;

        gsap.fromTo(
          card,
          { scale: 1, opacity: 1, y: 0 },
          {
            scale: 0.88,
            opacity: 0.42,
            y: shouldPin ? -48 : -24,
            ease: "none",
            transformOrigin: "center top",
            scrollTrigger: {
              trigger: scene,
              start: shouldPin ? "top top" : "bottom bottom",
              endTrigger: next,
              end: "top top",
              pin: shouldPin,
              pinSpacing: false,
              scrub: 0.85,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          },
        );
      });

      if (isDesktop()) {
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
            duration: { min: 0.22, max: 0.55 },
            delay: 0.04,
            ease: "power2.inOut",
          },
        });
      }
    }, el);

    requestAnimationFrame(() => ScrollTrigger.refresh());
  }

  function goToScene(index: number) {
    const target = scenes()[index];
    if (!target) return;

    activeIndex.value = index;
    gsap.to(window, {
      duration: prefersReducedMotion() ? 0 : 0.85,
      scrollTo: { y: target, offsetY: 0 },
      ease: "power2.inOut",
    });
  }

  onMounted(async () => {
    await nextTick();
    setup();
  });

  onBeforeUnmount(() => {
    ctx?.revert();
    ctx = null;
  });

  return { activeIndex, goToScene };
}
