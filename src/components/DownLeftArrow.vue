<template>
  {{ isDark }}
  <div class="arrow left-arrow">
    <div id="left-one-anim">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 193"
          width="300"
          height="50"
          preserveAspectRatio="xMidYMid meet"
          class="icon"
      >
        <defs>
          <clipPath id="__lottie_element_102">
            <rect width="200" height="193" x="0" y="0"></rect>
          </clipPath>
          <linearGradient
              id="__lottie_element_106"
              spreadMethod="pad"
              gradientUnits="userSpaceOnUse"
              x1="51"
              y1="-93.72100067138672"
              x2="51"
              y2="-29.086000442504883"
          >
            <stop
                offset="0%"
                stop-color="rgb(255,255,255)"
                stop-opacity="0"
            ></stop>
            <stop
                offset="40%"
                stop-color="rgb(255,255,255)"
                stop-opacity="0.5"
            ></stop>
            <stop
                offset="80%"
                stop-color="rgb(255,255,255)"
                stop-opacity="1"
            ></stop>
          </linearGradient>
        </defs>
        <g clip-path="url(#__lottie_element_102)">
          <g
              transform="matrix(1,0,0,1,100,96.5)"
              opacity="1"
              style="display: block"
          >
            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
              <path
                  stroke="url(#__lottie_element_106)"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  stroke-opacity="1"
                  stroke-width="1"
                  d=" M98.81600189208984,-96.5 C98.81600189208984,-96.5 98.81600189208984,-15.5 98.81600189208984,-15.5 C98.81600189208984,-7.216000080108643 92.10099792480469,-0.5 83.81600189208984,-0.5 C83.81600189208984,-0.5 2.815999984741211,-0.5 2.815999984741211,-0.5"
              ></path>
            </g>
            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
              <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  :stroke="strokeColor"
                  stroke-opacity="1"
                  stroke-width="1"
                  d=" M3,-0.5 C3,-0.5 -73,-0.5 -73,-0.5 C-81.28399658203125,-0.5 -88,6.216000080108643 -88,14.5 C-88,14.5 -88,95.5 -88,95.5"
              ></path>
            </g>
            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
              <path
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill-opacity="0"
                  stroke-miterlimit="4"
                  :stroke="strokeColor"
                  stroke-opacity="1"
                  stroke-width="1"
                  d=" M-99,85.5 C-99,85.5 -88,95.5 -88,95.5 C-88,95.5 -77,85.5 -77,85.5"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </div>
    <div id="left-one-anim-mobile"></div>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted} from "vue";
import lottie from "lottie-web";
import {isDark} from "@/composables/toggle.ts";

const strokeColor = computed(() =>
    isDark.value ? "rgb(255,255,255)" : "rgb(0,0,0)"
)
let leftOneAnim = lottie.loadAnimation({
  // @ts-ignore
  container: document.getElementById("left-one-anim"), // the dom element that will contain the animation
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "../assets/arrow-down.json", // the path to the animation json
});

onMounted(() => {
  leftOneAnim.play();
});
</script>

<style scoped>
.arrow {
  max-width: 1280px;
  padding: 0px 30px;
  margin: 0px auto;
  pointer-events: none;
}

.icon {
  width: 100%;
  height: 100%;
  transform: translate3d(0px, 0px, 0px);
}
</style>
