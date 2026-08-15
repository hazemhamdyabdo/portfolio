<script setup lang="ts">
import { computed, ref } from "vue";
import { experience, profile } from "@/content/profile";
import { isDark } from "@/composables/toggle.ts";
import {
  useStackedSections,
  type SceneMeta,
} from "@/composables/useStackedSections";

const root = ref<HTMLElement | null>(null);
const { activeIndex, goToScene } = useStackedSections(root);

const scenes = computed<SceneMeta[]>(() => [
  { id: "intro", label: "Intro" },
  ...experience.map((work) => ({
    id: work.company,
    label: work.company.replace(/_/g, " "),
  })),
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
]);
</script>

<template>
  <section
    ref="root"
    class="experience"
    :class="{ 'is-dark': isDark }"
  >
    <nav class="scene-dots" aria-label="Experience sections">
      <button
        v-for="(scene, index) in scenes"
        :key="scene.id"
        type="button"
        class="scene-dot"
        :class="{ active: activeIndex === index }"
        :aria-current="activeIndex === index ? 'true' : undefined"
        :aria-label="`Go to ${scene.label}`"
        :title="scene.label"
        @click="goToScene(index)"
      />
    </nav>

    <section data-scene class="scene" aria-label="Introduction">
      <div class="scene-card panel">
        <p class="scene-index" op50 text-sm font-600>
          01 / {{ String(scenes.length).padStart(2, "0") }}
        </p>
        <header class="intro" space-y-3>
          <p class="eyebrow" text-sm tracking-wide uppercase op60 font-600>
            {{ profile.location }} · Open to impactful frontend roles
          </p>
          <h1 text-black text-4xl font-700 dark:text-white>
            Hi, I'm {{ profile.name }}
          </h1>
          <h2 text-black text-xl font-600 op80 dark:text-white>
            {{ profile.title }}
          </h2>
          <p class="summary" font-base text-lg leading-relaxed op80>
            {{ profile.summary }}
          </p>
          <div flex="~ wrap" gap-3 pt-2>
            <a
              class="cta"
              :href="profile.links.resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
            <a class="cta ghost" :href="`mailto:${profile.email}`">
              Email me
            </a>
            <RouterLink class="cta ghost" :to="{ name: 'projects' }">
              View projects
            </RouterLink>
          </div>
        </header>
      </div>
    </section>

    <section
      v-for="(work, index) in experience"
      :key="work.company + work.date"
      data-scene
      class="scene"
      :aria-label="work.company"
    >
      <article class="scene-card panel job" :class="{ 'job-latest': index === 0 }">
        <p class="scene-index" op50 text-sm font-600>
          {{ String(index + 2).padStart(2, "0") }} /
          {{ String(scenes.length).padStart(2, "0") }}
        </p>
        <div class="job-meta" flex="~ col" gap-1>
          <h3 text-black text-xl font-700 dark:text-white>
            {{ work.title }}
          </h3>
          <p font-base text-base font-600>
            <a
              v-if="work.url"
              :href="work.url"
              target="_blank"
              rel="noopener noreferrer"
              class="company-link"
            >
              {{ work.company }}
            </a>
            <span v-else>{{ work.company }}</span>
            <span op50> · {{ work.location }} · {{ work.date }}</span>
          </p>
          <p class="job-desc" font-italic op70>
            {{ work.description }}
          </p>
        </div>
        <ul class="duties" list-disc space-y-2 ml-5 mt-3>
          <li
            v-for="(responsibility, rIndex) in work.responsibilities"
            :key="rIndex"
          >
            <p>{{ responsibility.title }}</p>
            <ul
              v-if="responsibility.children?.length"
              list-circle
              space-y-1
              ml-5
              my-2
            >
              <li
                v-for="(child, cIndex) in responsibility.children"
                :key="cIndex"
              >
                {{ child }}
              </li>
            </ul>
          </li>
        </ul>
      </article>
    </section>

    <section data-scene class="scene" aria-label="Education and languages">
      <div class="scene-card panel">
        <p class="scene-index" op50 text-sm font-600>
          {{ String(experience.length + 2).padStart(2, "0") }} /
          {{ String(scenes.length).padStart(2, "0") }}
        </p>
        <div class="grid-meta" grid="~ cols-1 md:cols-2" gap-8>
          <div space-y-3>
            <h2 text-black text-2xl font-700 dark:text-white>Education</h2>
            <p font-base font-600>{{ profile.education.degree }}</p>
            <p font-base op70>
              {{ profile.education.school }} · {{ profile.education.date }}
            </p>
          </div>
          <div space-y-3>
            <h2 text-black text-2xl font-700 dark:text-white>Languages</h2>
            <ul space-y-2>
              <li
                v-for="lang in profile.languages"
                :key="lang.name"
                flex="~ justify-between"
                max-w-xs
              >
                <span font-base font-600>{{ lang.name }}</span>
                <span font-base op60>{{ lang.level }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section data-scene class="scene" aria-label="Technical skills">
      <div class="scene-card panel">
        <p class="scene-index" op50 text-sm font-600>
          {{ String(scenes.length).padStart(2, "0") }} /
          {{ String(scenes.length).padStart(2, "0") }}
        </p>
        <div space-y-4>
          <h2 text-black text-2xl font-700 dark:text-white>Technical Skills</h2>
          <div class="skills" space-y-4>
            <div
              v-for="group in profile.skillGroups"
              :key="group.label"
              class="skill-row"
            >
              <h3
                class="skill-label"
                font-700
                text-sm
                tracking-wide
                uppercase
                op60
              >
                {{ group.label }}
              </h3>
              <p class="skill-items" font-base leading-relaxed>
                {{ group.items.join(" · ") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped lang="scss">
.experience {
  width: 100%;
  color: #111827;
}

.experience.is-dark {
  color: #f3f4f6;
}

.scene {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5.5rem 1.25rem 2.5rem;
  box-sizing: border-box;
}

.scene-card {
  width: min(52rem, 100%);
  will-change: transform, opacity;
}

.panel {
  padding: 2rem 1.5rem 2.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(15, 23, 42, 0.1);
  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
}

.experience.is-dark .panel {
  background: rgba(15, 15, 15, 0.78);
  border-color: rgba(255, 255, 255, 0.14);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
}

.scene-index {
  margin-bottom: 1rem;
  letter-spacing: 0.08em;
}

.scene-dots {
  position: fixed;
  right: 1.1rem;
  top: 50%;
  z-index: 30;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  transform: translateY(-50%);
}

.scene-dot {
  width: 0.55rem;
  height: 0.55rem;
  padding: 0;
  border: 1px solid rgba(15, 23, 42, 0.35);
  border-radius: 999px;
  background: transparent;
  cursor: pointer;
  transition: transform 0.25s ease, background 0.25s ease, height 0.25s ease;
}

.scene-dot.active {
  height: 1.35rem;
  background: #111827;
  border-color: #111827;
}

.experience.is-dark .scene-dot {
  border-color: rgba(226, 232, 240, 0.4);
}

.experience.is-dark .scene-dot.active {
  background: #f3f4f6;
  border-color: #f3f4f6;
}

.cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.55rem 1rem;
  border-radius: 0.5rem;
  font-weight: 700;
  text-decoration: none;
  background: #111827;
  color: #fff;
  border: 1px solid #111827;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.cta:hover {
  opacity: 0.88;
  transform: translateY(-1px);
}

.cta.ghost {
  background: transparent;
  color: #111827;
  border-color: rgba(15, 23, 42, 0.28);
}

.experience.is-dark .cta:not(.ghost) {
  background: #f5f5f5;
  color: #111827;
  border-color: #f5f5f5;
}

.experience.is-dark .cta.ghost {
  color: #f3f4f6;
  border-color: rgba(226, 232, 240, 0.35);
}

.company-link {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 0.2rem;
}

.duties,
.job-desc,
.skill-items {
  color: inherit;
}

.job-latest {
  background: rgba(255, 255, 255, 0.92);
}

.experience.is-dark .job-latest {
  background: rgba(22, 22, 22, 0.86);
}

.skill-row {
  display: grid;
  grid-template-columns: 9rem 1fr;
  gap: 0.75rem 1.25rem;
  align-items: baseline;
}

@media (max-width: 640px) {
  .scene {
    padding: 5rem 0.85rem 1.75rem;
    min-height: auto;
  }

  .panel {
    padding: 1.25rem 1rem 1.75rem;
  }

  .skill-row {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }

  .scene-dots {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .scene-card {
    will-change: auto;
  }
}
</style>
