<script setup lang="ts">
defineProps<{ year: number }>();
</script>

<template>
  <div>
    <span
      class="blog-year"
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

<style scoped lang="scss">
@media (max-width: 460px) {
  .blog-year {
    left: -0.6rem;
  }
}
</style>
