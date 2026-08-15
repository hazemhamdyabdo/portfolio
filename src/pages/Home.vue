<script setup lang="ts">
import CountDown from "../components/CountDown.vue";
import LinkPreview from "@/components/ui/LinkPreview.vue";
import { profile } from "@/content/profile";
</script>

<template>
  <div class="continer text-center">
    <p
      class="eyebrow"
      text-sm
      tracking-wide
      uppercase
      op60
      font-600
    >
      {{ profile.title }} · {{ profile.location }}
    </p>
    <h1 text-black text-4xl font-700 dark:text-white>{{ profile.name }}</h1>
    <p font-base>
      Hey, I am <strong font-900>{{ profile.name }}</strong> — a
      <strong font-900>Senior Frontend Engineer</strong> with
      <strong font-900>5+ years</strong> building scalable web apps in
      <strong font-900>Vue.js</strong>, <strong font-900>React</strong>, and
      <strong font-900>TypeScript</strong>. I focus on frontend architecture,
      reusable component systems, data visualization, and large-scale
      migrations.
    </p>
    <CountDown />
    <p font-base>
      Currently at
      <LinkPreview
        :width="400"
        :height="150"
        class="font-bold"
        url="https://wakeb.tech/"
      >
        Wakeb
      </LinkPreview>
      — designing enterprise Vue/TypeScript systems, interactive maps &amp;
      charts, real-time streaming UIs, and a reusable map package shared across
      products.
    </p>
    <p font-base>
      Previously at
      <LinkPreview class="font-bold" url="https://hectarplus.io/">
        Hectar
      </LinkPreview>
      (component systems, Vitest, GitHub Actions CI/CD),
      <LinkPreview class="font-bold" url="https://payiano.com/">Payiano</LinkPreview>
      (Vue 2→3 and Webpack→Vite migrations for a payments platform), and
      <a
        class="font-bold cursor-pointer"
        dark:text-white
        style="text-decoration: none"
        href="https://www.dorysoftware.com/"
        target="_blank"
        rel="noopener noreferrer"
        >Dory Software</a
      >
      (e-commerce, booking, and real-estate apps with charting and shared UI
      kits).
    </p>
    <p font-base>
      {{ profile.highlight }} Find the
      <RouterLink :to="{ name: 'projects' }" text-black dark:text-white>
        full projects list
      </RouterLink>
      and
      <RouterLink :to="{ name: 'experience' }" text-black dark:text-white>
        work experience
      </RouterLink>
      .
    </p>
    <p font-base>
      Beyond coding, I enjoy Rocket League and FIFA. If you share the passion,
      we can team up or compete while solving problems on
      <a
        href="https://www.codingame.com/servlet/urlinvite?u=5591068"
        target="_blank"
        rel="noopener noreferrer"
        text-black
        dark:text-white
        >Codingame</a
      >.
    </p>
    <hr />
    <div space-y-3xl>
      <h2 font-base font-700 text-xl>Coding Profiles</h2>
      <ul flex="~ row justify-between" class="test">
        <li>
          <a
            href="https://github.com/hazemhamdyabdo"
            target="_blank"
            rel="noopener noreferrer"
            text-black
            dark:text-white
            >Github</a
          >
        </li>
        <li>
          <a
            href="https://leetcode.com/Hazem224/"
            target="_blank"
            rel="noopener noreferrer"
            text-black
            dark:text-white
            >Leetcode</a
          >
        </li>
        <li>
          <a
            href="https://www.hackerrank.com/profile/hazemhamdy117"
            target="_blank"
            rel="noopener noreferrer"
            text-black
            dark:text-white
            >HackerRank</a
          >
        </li>
        <li>
          <a
            href="https://www.codewars.com/users/Hazem.H"
            target="_blank"
            rel="noopener noreferrer"
            text-black
            dark:text-white
            >CodeWars</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
html {
  .test a:hover {
    color: black;
    font-weight: 700;
  }
}

html.dark {
  a:hover {
    color: lightgray;
  }
}

.continer {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 0.5rem;
  padding: 2rem 5rem;

  & p {
    font-size: large;
    line-height: 2rem;
  }

  hr {
    height: 0.4px;
    background-color: rgba(122, 122, 122, 0.39);
    border: none;
    width: 8rem;
    margin: 0 auto;
  }
}

a {
  font-weight: 600;
  text-decoration: underline;
  text-decoration-color: rgb(66, 66, 66);
  text-underline-offset: 0.2rem;
}

ul > li > a {
  color: rgb(170, 170, 170);
  font-weight: 600;

  &:hover {
    color: white;
  }
}

@media only screen and (max-width: 800px) {
  .continer {
    padding: 0 1rem;
    width: auto;
  }
}
</style>
