import { useColorMode } from "@vueuse/core";
import { nextTick, computed } from "vue";

const mode = useColorMode();
export const isDark = computed(() => (mode.value === "dark" ? true : false));
export function toggleDark(event: MouseEvent) {
  // prettier-ignore
  // @ts-expect-error experimental API
  const isAppearanceTransition =document.startViewTransition &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!isAppearanceTransition) {
    mode.value = mode.value === "dark" ? "light" : "dark";
    return;
  }

  const x = event.clientX;
  const y = event.clientY;
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  );
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    mode.value = mode.value === "dark" ? "light" : "dark";
    await nextTick();
  });
  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ];
    document.documentElement.animate(
      {
        clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 400,
        easing: "ease-out",
        pseudoElement: isDark.value
          ? "::view-transition-old(root)"
          : "::view-transition-new(root)",
      }
    );
  });
}
