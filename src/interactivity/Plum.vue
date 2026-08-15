<script setup lang="ts">
import { Fn, useEventListener, useRafFn, useWindowSize } from "@vueuse/core";
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  watch,
} from "vue";
import { isDark } from "@/composables/toggle.ts";

const r180 = Math.PI;
const r90 = Math.PI / 2;
const r15 = Math.PI / 12;
const MIN_BRANCH = 36;

const el = ref<HTMLCanvasElement | null>(null);
const { random } = Math;
const { width: viewWidth, height: viewHeight } = useWindowSize();
const pointer = reactive({ x: 0, y: 0, active: false });

const mask = computed(
  () =>
    "radial-gradient(circle at 50% 42%, transparent 18%, rgba(0,0,0,0.35) 48%, black 78%)",
);

type Palette = {
  stroke: string;
  glow: string;
  petal: string;
  center: string;
  fade: string;
};

type Controls = {
  start: Fn;
  burst: (x: number, y: number) => void;
  resize: () => void;
  restyle: () => void;
  stop: Fn;
};

const controls = ref<Controls | null>(null);

function palette(): Palette {
  if (isDark.value) {
    return {
      stroke: "rgba(226, 232, 240, 0.2)",
      glow: "rgba(251, 207, 232, 0.28)",
      petal: "rgba(251, 182, 206, 0.42)",
      center: "rgba(253, 224, 171, 0.62)",
      fade: "rgba(5, 5, 5, 0.16)",
    };
  }

  return {
    stroke: "rgba(71, 85, 105, 0.22)",
    glow: "rgba(190, 24, 93, 0.18)",
    petal: "rgba(190, 24, 93, 0.34)",
    center: "rgba(180, 83, 9, 0.42)",
    fade: "rgba(242, 242, 242, 0.18)",
  };
}

function initCanvas(
  canvas: HTMLCanvasElement,
  width = 400,
  height = 400,
  _dpi?: number,
) {
  const ctx = canvas.getContext("2d")!;
  const dpr = window.devicePixelRatio || 1;
  // prettier-ignore
  // @ts-expect-error vendor
  const bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
  const dpi = _dpi || dpr / bsr;

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.width = dpi * width;
  canvas.height = dpi * height;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(dpi, dpi);

  return { ctx, dpi };
}

function polar2cart(x = 0, y = 0, r = 0, theta = 0) {
  return [x + r * Math.cos(theta), y + r * Math.sin(theta)] as const;
}

function shortestAngle(from: number, to: number) {
  let diff = to - from;
  while (diff > Math.PI) diff -= Math.PI * 2;
  while (diff < -Math.PI) diff += Math.PI * 2;
  return diff;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

onMounted(() => {
  const canvas = el.value!;
  let { ctx } = initCanvas(canvas, viewWidth.value, viewHeight.value);
  let colors = palette();
  let steps: Fn[] = [];
  let prevSteps: Fn[] = [];
  let lastTime = performance.now();
  let restartTimer = 0;
  const interval = 1000 / 42;

  const drawBlossom = (x: number, y: number, sizeScale: number) => {
    const radius = 1.6 + sizeScale * 2.4;
    ctx.save();
    ctx.translate(x, y);
    ctx.shadowBlur = 10;
    ctx.shadowColor = colors.glow;
    ctx.fillStyle = colors.petal;
    for (let i = 0; i < 5; i += 1) {
      ctx.rotate((Math.PI * 2) / 5);
      ctx.beginPath();
      ctx.ellipse(
        0,
        -radius * 0.7,
        radius * 0.38,
        radius * 0.85,
        0,
        0,
        Math.PI * 2,
      );
      ctx.fill();
    }
    ctx.beginPath();
    ctx.fillStyle = colors.center;
    ctx.arc(0, 0, radius * 0.32, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  const step = (
    x: number,
    y: number,
    rad: number,
    counter: { value: number } = { value: 0 },
  ) => {
    const length = random() * (viewWidth.value < 700 ? 6 : 8.5);
    counter.value += 1;

    let heading = rad;
    if (pointer.active) {
      const aim = Math.atan2(pointer.y - y, pointer.x - x);
      heading += shortestAngle(rad, aim) * 0.16;
    }

    const [nx, ny] = polar2cart(x, y, length, heading);

    ctx.beginPath();
    ctx.strokeStyle = colors.stroke;
    ctx.lineWidth = Math.max(0.35, 1.55 - counter.value * 0.035);
    ctx.lineCap = "round";
    ctx.shadowBlur = counter.value < 8 ? 6 : 0;
    ctx.shadowColor = colors.glow;
    ctx.moveTo(x, y);
    ctx.lineTo(nx, ny);
    ctx.stroke();

    if (
      nx < -120 ||
      nx > viewWidth.value + 120 ||
      ny < -120 ||
      ny > viewHeight.value + 120
    ) {
      return;
    }

    const rad1 = heading + random() * r15;
    const rad2 = heading - random() * r15;
    const rate = counter.value <= MIN_BRANCH ? 0.82 : 0.48;
    let spawned = false;

    if (random() < rate) {
      steps.push(() => step(nx, ny, rad1, counter));
      spawned = true;
    }
    if (random() < rate) {
      steps.push(() => step(nx, ny, rad2, counter));
      spawned = true;
    }

    if (!spawned && random() < 0.22) {
      drawBlossom(nx, ny, random());
    } else if (spawned && random() < 0.035) {
      drawBlossom(nx, ny, random() * 0.7);
    }
  };

  const raf = useRafFn(
    () => {
      if (performance.now() - lastTime < interval) return;
      prevSteps = steps;
      steps = [];
      lastTime = performance.now();

      if (!prevSteps.length) {
        raf.pause();
        window.clearTimeout(restartTimer);
        restartTimer = window.setTimeout(() => fadeAndRestart(), 3200);
        return;
      }

      prevSteps.forEach((task) => {
        if (random() < 0.45) steps.push(task);
        else task();
      });
    },
    { immediate: false },
  );

  const seedFromEdges = () => {
    const mid = () => random() * 0.62 + 0.19;
    const seeds: Fn[] = [
      () => step(mid() * viewWidth.value, -6, r90),
      () => step(mid() * viewWidth.value, viewHeight.value + 6, -r90),
      () => step(-6, mid() * viewHeight.value, 0),
      () => step(viewWidth.value + 6, mid() * viewHeight.value, r180),
    ];
    return viewWidth.value < 640 ? seeds.slice(0, 2) : seeds;
  };

  const applyStroke = () => {
    colors = palette();
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = colors.stroke;
  };

  const start = () => {
    window.clearTimeout(restartTimer);
    ctx.clearRect(0, 0, viewWidth.value, viewHeight.value);
    applyStroke();
    prevSteps = [];
    steps = seedFromEdges();
    raf.resume();
  };

  const fadeAndRestart = () => {
    let frames = 18;
    const fade = () => {
      ctx.shadowBlur = 0;
      ctx.fillStyle = colors.fade;
      ctx.fillRect(0, 0, viewWidth.value, viewHeight.value);
      frames -= 1;
      if (frames > 0) requestAnimationFrame(fade);
      else start();
    };
    fade();
  };

  const burst = (x: number, y: number) => {
    window.clearTimeout(restartTimer);
    applyStroke();
    for (let i = 0; i < 5; i += 1) {
      const rad = (Math.PI * 2 * i) / 5 + random() * 0.4;
      steps.push(() => step(x, y, rad));
    }
    raf.resume();
  };

  const resize = () => {
    if (!viewWidth.value || !viewHeight.value) return;
    ({ ctx } = initCanvas(canvas, viewWidth.value, viewHeight.value));
    start();
  };

  const restyle = () => {
    applyStroke();
    fadeAndRestart();
  };

  const stop = () => {
    raf.pause();
    window.clearTimeout(restartTimer);
  };

  controls.value = { start, burst, resize, restyle, stop };

  if (prefersReducedMotion()) {
    applyStroke();
    seedFromEdges().forEach((task) => task());
    return;
  }

  start();
});

useEventListener(window, "pointermove", (event) => {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
  pointer.active = true;
});

useEventListener(window, "pointerdown", (event) => {
  const target = event.target as HTMLElement | null;
  if (target?.closest("a, button, input, textarea, select")) return;
  controls.value?.burst(event.clientX, event.clientY);
});

watch([viewWidth, viewHeight], () => {
  controls.value?.resize();
});

watch(isDark, () => {
  controls.value?.restyle();
});

onBeforeUnmount(() => {
  controls.value?.stop();
});
</script>

<template>
  <div
    class="plum fixed inset-0 pointer-events-none print:hidden"
    :style="{
      zIndex: -1,
      maskImage: mask,
      WebkitMaskImage: mask,
    }"
  >
    <canvas ref="el" width="400" height="400" />
  </div>
</template>

<style scoped>
.plum canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
