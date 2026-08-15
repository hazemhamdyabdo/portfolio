<script setup lang="ts">
import PostLayout from "@/layout/PostLayout.vue";
</script>

<template>
  <PostLayout>
    <h2 second-head>Pinia Patterns for Scalable State</h2>
    <p text-base>
      Pinia is simple on purpose. Scale comes from how you slice stores, expose
      actions, and keep components from knowing too much about server details.
    </p>

    <h3 third-head>Store by domain, not by page</h3>
    <p text-base>
      A <code>useDashboardStore</code> that owns every widget gets messy fast.
      Prefer domain stores—auth, billing, notifications—then compose them in
      views. Shared UI state (modals, toasts) can live in a small dedicated store
      or provide/inject.
    </p>

    <h3 third-head>Actions as the API boundary</h3>
    <ul>
      <li>Put API calls and normalization inside actions.</li>
      <li>Keep getters cheap and derived—avoid hidden network work.</li>
      <li>Return typed results so callers can handle success and failure explicitly.</li>
    </ul>

    <h3 third-head>Scaling tips</h3>
    <p text-base>
      Colocate store modules with features when possible. Use plugins for
      persistence and analytics carefully. For high-frequency updates, batch
      mutations and avoid deep reactive trees for large immutable snapshots—use
      shallow refs where appropriate.
    </p>
  </PostLayout>
</template>
