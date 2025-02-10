<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const props = defineProps({
  width: {
    type: String,
    default: "1rem",
  },
  height: {
    type: String,
    default: "1rem",
  },
  fill: {
    type: String,
    default: "currentColor",
  },
  icon: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});

const iconComponent = defineAsyncComponent(
  () => import(`/icons/${props.icon}.svg`)
);
</script>

<template>
  <component
    :is="iconComponent"
    :width="width"
    :height="height"
    :fill="fill"
    :title="title"
  />
</template>

<style scoped></style>
