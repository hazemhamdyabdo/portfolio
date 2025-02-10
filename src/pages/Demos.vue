<script setup lang="ts">
import {useColorMode} from "@vueuse/core";
import LinkPreview from "@/components/ui/LinkPreview.vue";
const isDark = computed(() => useColorMode().value == "dark");
const bgColor = computed(() => (isDark.value ? "#000" : "#fff"));
</script>

<template>
  <div class="center">
    <div class="flex h-[40rem] flex-col items-center justify-center px-4">
      <p class="mx-auto mb-10 max-w-3xl text-xl text-neutral-500 md:text-3xl dark:text-neutral-400">
        <LinkPreview
            url="https://tailwindcss.com"
            class="font-bold"
        >
          Tailwind CSS
        </LinkPreview>
        and
        <LinkPreview
            url="https://motion.unovue.com/"
            class="font-bold"
        >
          motion-v
        </LinkPreview>
        are a great way to build modern websites.
      </p>
      <p class="mx-auto max-w-3xl text-xl text-neutral-500 md:text-3xl dark:text-neutral-400">
        Visit
        <LinkPreview
            url="https://inspira-ui.com"
            :width="400"
            :height="200"
        >
        <span
            class="bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text font-bold text-transparent"
        >
          Inspira UI
        </span>
        </LinkPreview>
        for more cool components
      </p>
    </div>
    <h2 second-head mb-2>Demos</h2>
    <h3 font-base>Demonstrations for projects I am working on from Tweets</h3>
    <div class="flex flex-col items-center justify-center">
    </div>
    <!--    <div grid="~ cols-1 lg:cols-2 xl:cols-3 gap-4" class="grid" p-5>-->
    <!--      <NuxtMovies />-->
    <!--      <TalkTrellis />-->
    <!--      <TalkWise />-->
    <!--    </div>-->
  </div>
</template>

<style scoped>
.center {
  display: grid;
  place-items: center;
}
</style>
