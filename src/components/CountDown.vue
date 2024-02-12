<template>
  <div flex="~ col justify-center" gap-2>
    <h2 font-base font-700 text-xl>Coding for</h2>
    <ul id="countdown" flex gap-10>
      <li id="days">
        <div class="number" font-base dark:text-white>
          {{ String(years).padStart(2, "0") }}
        </div>
        <div class="label">Years</div>
      </li>
      <li id="days">
        <div class="number" font-base dark:text-white>
          {{ String(days).padStart(2, "0") }}
        </div>
        <div class="label">Days</div>
      </li>
      <li id="hours">
        <div class="number" font-base dark:text-white>
          {{ String(hours).padStart(2, "0") }}
        </div>
        <div class="label">Hours</div>
      </li>
      <li id="minutes">
        <div class="number" font-base dark:text-white>
          {{ String(mins).padStart(2, "0") }}
        </div>
        <div class="label">Minutes</div>
      </li>
      <li id="seconds">
        <div class="number" font-base dark:text-white>
          {{ String(seconds).padStart(2, "0") }}
        </div>
        <div class="label">Seconds</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

const dateNow = ref(new Date().getTime());
const endDate = new Date("01/01/2022").getTime();
const diff = computed(() => (dateNow.value - endDate) / 1000);
const years = computed(() => Math.floor(diff.value / (60 * 60 * 24 * 365)));
const days = computed(() =>
  Math.floor((diff.value % (60 * 60 * 24 * 365)) / (60 * 60 * 24))
);
const hours = computed(() =>
  Math.floor((diff.value % (60 * 60 * 24)) / (60 * 60))
);
const mins = computed(() => Math.floor((diff.value % (60 * 60)) / 60));
const seconds = computed(() => Math.floor(diff.value % 60));
setInterval(() => {
  dateNow.value += 1000;
}, 1000);
</script>

<style lang="scss" scoped>
ul#countdown {
  margin: 0 auto;
  padding: 15px 0 20px 0;
  color: #fff;
  border: 0 solid #adafb2;
  border-width: 1px 0;
  width: fit-content;
  overflow: hidden;
  font-family: "Arial Narrow", Arial, sans-serif;
  font-weight: bold;

  li {
    padding: 0;
    display: inline-block;
    font-size: 1.5vw;
    text-align: center;

    .label {
      color: #adafb2;
      font-size: 0.7vw;
      text-transform: uppercase;
    }
  }
}

@media only screen and (max-width: 800px) {
  ul#countdown {
    li {
      font-size: 5.5vw;

      & .label {
        font-size: 2vw;
      }
    }
  }
}
</style>
