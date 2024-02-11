<script setup lang="ts">
import NuxtMovies from "@/demos/NuxtMovies.vue";
import TalkWise from "@/demos/TalkWise.vue";
import TalkTrellis from "@/demos/TalkTrellis.vue";

/**
 * @TODO: add Freelance project as vidoe, Sable dashboard and website, payiano website and Nuxt movies
 */
</script>

<template>
  <div class="center">
    <h2 second-head mb-2>Demos</h2>
    <h3 font-base>Demonstrations for projects I am working on from Tweets</h3>
    <div grid="~ cols-1 lg:cols-2 xl:cols-3 gap-4" class="grid" p-5>
      <NuxtMovies />
      <TalkTrellis />
      <TalkWise />
    </div>
  </div>
</template>

<style scoped>
.center {
  display: grid;
  place-items: center;
}
</style>
