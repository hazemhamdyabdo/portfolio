<script setup lang="ts">
import PostLayout from "@/layout/PostLayout.vue";
</script>

<template>
  <PostLayout>
    <h2 second-head>Vite Beyond the Basics Performance Tips</h2>
    <p text-base>
      Switching to Vite already improves local DX. The next gains come from how
      you structure entry points, dependencies, and production chunks.
    </p>

    <h3 third-head>Keep the dependency graph honest</h3>
    <ul>
      <li>Prefer ESM-friendly libraries; avoid pulling huge CJS trees into the client.</li>
      <li>Use <code>optimizeDeps.include</code> for stubborn packages that pre-bundle slowly.</li>
      <li>Alias heavy optional features behind dynamic <code>import()</code>.</li>
    </ul>

    <h3 third-head>Production build habits</h3>
    <p text-base>
      Audit chunk sizes after each major feature. Split routes and large chart /
      map libraries. Compress assets in CI and set long-cache headers for hashed
      files. A fast Vite dev server does not automatically mean a lean
      production bundle.
    </p>

    <h3 third-head>DX details that pay off</h3>
    <p text-base>
      Enable typed env vars, keep path aliases consistent with TypeScript, and
      fail CI on type errors. Small friction in the pipeline prevents large
      surprises before release.
    </p>
  </PostLayout>
</template>
