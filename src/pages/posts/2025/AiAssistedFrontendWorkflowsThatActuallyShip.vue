<script setup lang="ts">
import PostLayout from "@/layout/PostLayout.vue";
</script>

<template>
  <PostLayout>
    <h2 second-head>
      AI Assisted Frontend Workflows That Actually Ship
    </h2>
    <p text-base>
      AI tools can speed up frontend work—but only when the workflow is
      deliberate. Used casually, they generate plausible UI that is hard to
      maintain. Used well, they compress boilerplate, tests, and refactors while
      you keep architecture decisions.
    </p>

    <h3 third-head>Where AI helps most</h3>
    <ul>
      <li>Scaffolding component shells, forms, and table layouts from specs.</li>
      <li>Drafting unit tests around edge cases you already understand.</li>
      <li>Explaining unfamiliar APIs or migration diffs line by line.</li>
      <li>Generating typed API clients from OpenAPI or sample payloads.</li>
    </ul>

    <h3 third-head>Guardrails that keep quality high</h3>
    <p text-base>
      Treat model output like a junior PR: review naming, accessibility, state
      boundaries, and performance before merge. Keep design tokens and component
      patterns in the repo so prompts can follow your system instead of inventing
      a new one. Prefer small, reviewable diffs over giant generated files.
    </p>

    <h3 third-head>A practical loop</h3>
    <ol>
      <li>Write acceptance criteria and constraints first.</li>
      <li>Generate a first pass for structure only.</li>
      <li>Integrate with real stores, APIs, and design tokens yourself.</li>
      <li>Ask the tool to propose tests, then tighten assertions manually.</li>
      <li>Run lint, typecheck, and visual checks before opening a PR.</li>
    </ol>

    <h3 third-head>Bottom line</h3>
    <p text-base>
      AI is leverage, not a replacement for frontend judgment. The teams that
      ship faster are the ones who pair AI with clear architecture, strong
      reviews, and automated checks—not the ones who paste the longest prompt.
    </p>
  </PostLayout>
</template>
