<script setup lang="ts">
import LastVersionOfVue from "@/pages/posts/2023/LastVersionOfVue.vue";
import NuxtVsVue from "@/pages/posts/2024/NuxtVsVue.vue";
import CompositionApiInVue from "@/pages/posts/2023/CompositionApiInVue.vue";
import ComposableVsMixins from "@/pages/posts/2023/ComposableVsMixins.vue";
import CommonVueMistakes from "@/pages/posts/2023/CommonVueMistakes.vue";
import Vue3MigrationNotes from "@/pages/posts/2023/Vue3MigrationNotes.vue";
import SolidPrinciplesDesignPatternsAndFunctionalProgramming from "@/pages/posts/2024/SolidPrinciplesDesignPatternsAndFunctionalProgramming.vue";
import Vue3ReactivitySystemIsBrilliant from "@/pages/posts/2024/Vue3Reactivity.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import ChervenRight from "@/components/icons/ChervenRight.vue";
const route = useRoute();
const cap = computed(() => {
  const title = route.params.title;
  const fixed = title
    // @ts-ignore
    .split("-")
    .map((e: string) => e[0].toUpperCase() + e.toLowerCase().slice(1))
    .join("");
  console.log(fixed);
  return fixed;
});
const blogs: any = {
  LastVersionOfVue,
  NuxtVsVue,
  CompositionApiInVue,
  ComposableVsMixins,
  CommonVueMistakes,
  Vue3MigrationNotes,
  SolidPrinciplesDesignPatternsAndFunctionalProgramming,
  Vue3ReactivitySystemIsBrilliant,
};
</script>

<template>
  <div px-7 py-10 of-x-hidden class="slide-enter">
    <Component :is="blogs[cap]" />
    <button class="btn" font-base @click="$router.back()">
      <span text-xl><ChervenRight /></span>
      <p>cd ..</p>
    </button>
  </div>
</template>

<style scoped lang="scss">
.btn {
  margin-right: auto;
  border-bottom: 1px solid;
  font-size: small;
  letter-spacing: 5px;
  transition: all 0.4s ease-in;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    color: white;
  }
}
</style>
