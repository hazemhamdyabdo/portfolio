<script setup lang="ts">
defineProps<{ year: number }>();
</script>

<template>
  <div>
    <span
      text-8em
      color-transparent
      absolute
      left--3rem
      top--7rem
      font-bold
      text-stroke-2
      text-stroke-hex-aaa
      op10
      z--1
      >{{ year }}</span
    >
  </div>
</template>

<style scoped lang="scss"></style>
