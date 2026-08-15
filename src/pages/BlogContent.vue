<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import ChervenRight from "@/components/icons/ChervenRight.vue";

import LastVersionOfVue from "@/pages/posts/2023/LastVersionOfVue.vue";
import NuxtVsVue from "@/pages/posts/2024/NuxtVsVue.vue";
import CompositionApiInVue from "@/pages/posts/2023/CompositionApiInVue.vue";
import ComposableVsMixins from "@/pages/posts/2023/ComposableVsMixins.vue";
import CommonVueMistakes from "@/pages/posts/2023/CommonVueMistakes.vue";
import Vue3MigrationNotes from "@/pages/posts/2023/Vue3MigrationNotes.vue";
import SolidPrinciplesDesignPatternsAndFunctionalProgramming from "@/pages/posts/2024/SolidPrinciplesDesignPatternsAndFunctionalProgramming.vue";
import Vue3ReactivitySystemIsBrilliant from "@/pages/posts/2024/Vue3Reactivity.vue";
import PiniaPatternsForScalableState from "@/pages/posts/2024/PiniaPatternsForScalableState.vue";
import ViteBeyondTheBasicsPerformanceTips from "@/pages/posts/2024/ViteBeyondTheBasicsPerformanceTips.vue";
import BuildingReusableMapComponentsWithMaplibreAndVue from "@/pages/posts/2025/BuildingReusableMapComponentsWithMaplibreAndVue.vue";
import AiAssistedFrontendWorkflowsThatActuallyShip from "@/pages/posts/2025/AiAssistedFrontendWorkflowsThatActuallyShip.vue";
import RealTimeDashboardsWithVueAndWebsockets from "@/pages/posts/2025/RealTimeDashboardsWithVueAndWebsockets.vue";
import VueVersusReactIn2025WhatStillMatters from "@/pages/posts/2025/VueVersusReactIn2025WhatStillMatters.vue";
import FrontendArchitectureForLargeScaleMigrations from "@/pages/posts/2025/FrontendArchitectureForLargeScaleMigrations.vue";
import HowToWriteEfficientReusableUiComponentPackagesWithReact from "@/pages/posts/2025/HowToWriteEfficientReusableUiComponentPackagesWithReact.vue";

const route = useRoute();

const slugToComponentKey = (title: string) =>
  title
    .split("-")
    .map((part) => part[0].toUpperCase() + part.toLowerCase().slice(1))
    .join("");

const cap = computed(() => {
  const title = String(route.params.title ?? "");
  return slugToComponentKey(title);
});

const blogs: Record<string, unknown> = {
  LastVersionOfVue,
  NuxtVsVue,
  CompositionApiInVue,
  ComposableVsMixins,
  CommonVueMistakes,
  Vue3MigrationNotes,
  SolidPrinciplesDesignPatternsAndFunctionalProgramming,
  Vue3ReactivitySystemIsBrilliant,
  PiniaPatternsForScalableState,
  ViteBeyondTheBasicsPerformanceTips,
  BuildingReusableMapComponentsWithMaplibreAndVue,
  AiAssistedFrontendWorkflowsThatActuallyShip,
  RealTimeDashboardsWithVueAndWebsockets,
  VueVersusReactIn2025WhatStillMatters,
  FrontendArchitectureForLargeScaleMigrations,
  HowToWriteEfficientReusableUiComponentPackagesWithReact,
};
</script>

<template>
  <div px-7 py-10 of-x-hidden class="slide-enter">
    <Component v-if="blogs[cap]" :is="blogs[cap]" />
    <p v-else font-base>Blog post not found.</p>
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
