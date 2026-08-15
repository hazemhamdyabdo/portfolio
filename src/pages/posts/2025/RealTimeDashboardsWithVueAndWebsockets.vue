<script setup lang="ts">
import PostLayout from "@/layout/PostLayout.vue";
</script>

<template>
  <PostLayout>
    <h2 second-head>Real Time Dashboards with Vue and WebSockets</h2>
    <p text-base>
      Real-time dashboards look simple until sockets reconnect, widgets thrash,
      and charts redraw on every tick. Building them well means treating the
      stream as a data pipeline—not just an event listener in a component.
    </p>

    <h3 third-head>Separate transport from UI</h3>
    <p text-base>
      Keep WebSocket connection logic in a composable or service: connect,
      authenticate, reconnect with backoff, and expose a reactive message bus.
      Widgets should subscribe to typed channels or stores, not open their own
      sockets. One connection per app is usually enough.
    </p>

    <h3 third-head>Batch before you paint</h3>
    <ul>
      <li>Buffer high-frequency events and flush on requestAnimationFrame or a short interval.</li>
      <li>Update Pinia / store slices immutably but avoid deep cloning huge trees every tick.</li>
      <li>Let charts and maps consume aggregated snapshots, not raw event floods.</li>
    </ul>

    <h3 third-head>Resilience checklist</h3>
    <p text-base>
      Show connection state in the UI. Queue outbound actions while offline.
      Re-sync critical entities after reconnect instead of assuming the last
      local snapshot is complete. For enterprise dashboards, stale data is often
      worse than a brief loading state.
    </p>

    <h3 third-head>When sockets are not enough</h3>
    <p text-base>
      Pair sockets with REST or GraphQL for initial hydration and historical
      ranges. Streams excel at deltas; HTTP still wins for large queries and
      pagination. The best realtime UIs use both deliberately.
    </p>
  </PostLayout>
</template>
