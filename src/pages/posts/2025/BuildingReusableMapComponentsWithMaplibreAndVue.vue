<script setup lang="ts">
import PostLayout from "@/layout/PostLayout.vue";
</script>

<template>
  <PostLayout>
    <h2 second-head>
      Building Reusable Map Components with MapLibre and Vue
    </h2>
    <p text-base>
      Interactive maps show up in more products than ever—logistics, analytics,
      real estate, and enterprise dashboards. The hard part is not dropping a
      map on a page. The hard part is packaging map behavior so multiple apps
      can share the same foundation without rewriting layers, popups, and
      controls every sprint.
    </p>

    <h3 third-head>Start with a thin wrapper, not a mega component</h3>
    <p text-base>
      A good MapLibre + Vue wrapper owns lifecycle only: create the map,
      destroy it cleanly, and expose a typed map instance through provide /
      inject or a composable. Keep styling, markers, and clustering as optional
      child components. That split keeps the core package small and lets product
      teams compose what they need.
    </p>

    <h3 third-head>Design for props that change often</h3>
    <ul>
      <li>
        Treat camera state (center, zoom, bearing) as controlled or
        semi-controlled inputs with clear ownership.
      </li>
      <li>
        Prefer declarative layer configs over imperative one-off calls when the
        same visual language is reused across products.
      </li>
      <li>
        Debounce rapid filter updates so you do not thrash the map render loop.
      </li>
    </ul>

    <h3 third-head>Performance habits that matter</h3>
    <p text-base>
      Large GeoJSON and frequent style mutations are the usual bottlenecks. Use
      source updates instead of recreating sources, simplify geometries for
      overview zoom levels, and lazy-load heavy plugins (draw tools, 3D, heat
      maps) only when a screen needs them. Measure with real datasets—not demo
      pins.
    </p>

    <h3 third-head>Ship a package, not a folder</h3>
    <p text-base>
      If several products need maps, extract a versioned package with peer
      dependencies on Vue and MapLibre, documented examples, and a smoke test
      that mounts the map in jsdom or Playwright. Shared map kits cut delivery
      time and keep UX consistent across dashboards and operational tools.
    </p>
  </PostLayout>
</template>
