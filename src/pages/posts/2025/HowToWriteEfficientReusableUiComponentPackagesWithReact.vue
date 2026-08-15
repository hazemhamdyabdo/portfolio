<script setup lang="ts">
import PostLayout from "@/layout/PostLayout.vue";
</script>

<template>
  <PostLayout>
    <h2 second-head>
      How to Write Efficient Reusable UI Component Packages with React
    </h2>
    <p text-base>
      A reusable UI package is not a folder of pretty buttons. It is a product
      with contracts: stable APIs, predictable styling, tree-shakeable builds,
      and clear ownership. In React teams, the difference between a helpful
      design system and a heavy dependency usually comes down to three ideas—
      <strong>atomic design</strong>, a disciplined <strong>monorepo</strong>,
      and intentional <strong>code splitting</strong>.
    </p>

    <h3 third-head>Start with Atomic Design as the API map</h3>
    <p text-base>
      Atomic Design is useful less as dogma and more as a packaging boundary.
      Keep the hierarchy strict so consumers always know what they are importing:
    </p>
    <ul>
      <li>
        <strong>Atoms</strong> — Button, Input, Badge, Icon. No product
        knowledge. Tiny props, strong defaults, accessible by default.
      </li>
      <li>
        <strong>Molecules</strong> — SearchField, FormField, MenuItem. Compose
        atoms; still domain-agnostic.
      </li>
      <li>
        <strong>Organisms</strong> — DataTable toolbar, FilterBar, AuthCard.
        Heavier composition; still reusable across apps.
      </li>
      <li>
        <strong>Templates / pages</strong> — usually stay in the app, not the
        shared package, unless you truly ship multi-product layouts.
      </li>
    </ul>
    <p text-base>
      Rule of thumb: if a component needs a specific backend DTO or a single
      product’s copy, it probably does not belong in the shared UI package.
      Push domain logic up; keep the package about interaction and presentation.
    </p>

    <h3 third-head>Monorepo structure that scales</h3>
    <p text-base>
      For a React UI kit plus apps, a monorepo (pnpm/npm/yarn workspaces, Nx, or
      Turborepo) keeps versions aligned and makes local iteration fast:
    </p>
    <ul>
      <li>
        <code>packages/ui</code> — public components, tokens, and hooks.
      </li>
      <li>
        <code>packages/ui-tokens</code> — colors, spacing, typography (optional
        split if multiple platforms consume tokens).
      </li>
      <li>
        <code>apps/docs</code> — Storybook or a docs site as the living catalog.
      </li>
      <li>
        <code>apps/web</code> (and siblings) — real consumers that prove the
        package in production paths.
      </li>
    </ul>
    <p text-base>
      Mark <code>react</code> and <code>react-dom</code> as
      <strong>peerDependencies</strong> so apps do not bundle duplicate Reacts.
      Share ESLint, TypeScript, and test configs from the repo root. Version the
      UI package independently (changesets help) even inside a monorepo—apps
      should upgrade deliberately.
    </p>

    <h3 third-head>API design for efficiency</h3>
    <ul>
      <li>
        Prefer composition over boolean prop explosions
        (<code>Button</code> + <code>Button.Icon</code>, not
        <code>isLoadingWithLeftIconAndDanger</code>).
      </li>
      <li>
        Export typed variants with a small style system (CVA, vanilla-extract,
        Tailwind presets, or CSS modules)—one source of truth for size/intent.
      </li>
      <li>
        Forward refs and support polymorphic <code>as</code> / <code>asChild</code>
        patterns where it helps accessibility and routing.
      </li>
      <li>
        Keep side effects out of render; isolate data-fetching from presentational
        components so the package stays usable in SSR and tests.
      </li>
    </ul>

    <h3 third-head>Code splitting that consumers actually feel</h3>
    <p text-base>
      A “reusable” package that forces every app to download the whole design
      system is not efficient. Design the build and entrypoints for tree-shaking:
    </p>
    <ol>
      <li>
        <strong>Path / named exports</strong> — enable
        <code>import Button from "@org/ui/button"</code> or carefully crafted
        ESM named exports so bundlers can drop unused atoms.
      </li>
      <li>
        <strong>Separate heavy organisms</strong> — charts, rich editors, and
        complex tables should be optional entry points or lazy-loaded by the
        app: <code>const DataTable = lazy(() => import("@org/ui/data-table"))</code>.
      </li>
      <li>
        <strong>Do not ship CSS as one giant blob</strong> if apps only use a
        few components—prefer CSS modules, style extraction per entry, or
        utility classes already present in the app.
      </li>
      <li>
        <strong>Externalize peers</strong> in the library build (tsup, Vite
        library mode, Rollup) so React, dayjs, and similar stay outside the
        package bundle.
      </li>
    </ol>
    <p text-base>
      Inside apps, split by route first; then lazy-load expensive UI package
      modules on the screens that need them. Measure with the bundle analyzer—
      assumptions about “small components” often hide large transitive deps.
    </p>

    <h3 third-head>Quality gates for a package people trust</h3>
    <ul>
      <li>Storybook stories for every public atom/molecule (states + a11y).</li>
      <li>Unit tests for behavior; visual or interaction tests for critical organisms.</li>
      <li>Type-safe public exports and an explicit <code>exports</code> map in package.json.</li>
      <li>Changelog + semver: breaking visual or prop changes are major versions.</li>
    </ul>

    <h3 third-head>A practical checklist before you publish</h3>
    <p text-base>
      Can a new app install the package and use three atoms without pulling
      charts? Can Storybook run from the monorepo without the production app?
      Can you deprecate a prop without a silent UI break? If yes, you are
      building a UI package—not just sharing components.
    </p>
    <p text-base>
      Efficient React UI packages combine atomic boundaries, monorepo
      discipline, and code splitting that respects real product usage. Get those
      right, and reuse becomes leverage instead of a shared bottleneck.
    </p>
  </PostLayout>
</template>
