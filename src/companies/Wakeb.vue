<script setup lang="ts">
const responsibilities = [
  "Designed and developed complex frontend systems using Vue.js and TypeScript for enterprise AI and data products.",
  "Built advanced data visualization interfaces with interactive maps and charts for large datasets.",
  "Implemented real-time data streaming and socket-based features for live operational views.",
  "Architected scalable UI structures for business platforms used across multiple teams.",
  "Shipped a reusable map component package consumed by several Wakeb products.",
  "Mentored mid-level developers, ran code reviews, and reinforced frontend best practices.",
  "Partnered with backend and design to deliver cohesive, high-quality user experiences.",
];
</script>

<template>
  <section class="continer">
    <div class="brand-panel" aria-hidden="true">
      <div class="brand-glow" />
      <div class="brand-content">
        <p class="brand-kicker">Current role</p>
        <h2 class="brand-name">WAKEB</h2>
        <p class="brand-tag">
          AI · Data visualization · Real-time maps &amp; charts
        </p>
        <a
          class="brand-link"
          href="https://wakeb.tech/services-and-solutions/project/dvs-system"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore DVS System →
        </a>
      </div>
    </div>
    <div flex="~ col" gap-2 pt-5 class="content">
      <h3 dark:text-white font-600>
        <a href="https://wakeb.tech/" dark:n-link-text target="_blank" rel="noopener noreferrer">
          @Wakeb_Data
        </a>
        <span class="role-meta" op60 text-sm font-500 ml-2>
          Senior Frontend · Jul 2024 – Present
        </span>
      </h3>
      <p font-base>
        At Wakeb, I build frontend systems for AI-driven data products—interactive
        dashboards, annotation tooling, and map-heavy visualizations on Vue.js and
        TypeScript.
      </p>
      <div>
        <h4 third-head mb-4>My Responsibilities</h4>
        <ul font-base list-circle space-y-2>
          <li v-for="item in responsibilities" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.continer {
  display: flex;
  justify-content: space-between;
  width: 84%;
  border-radius: 8px;
  overflow: hidden;
  gap: 2rem;
  margin: 0 auto;
}

.brand-panel {
  position: relative;
  min-width: min(42%, 420px);
  min-height: 280px;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid rgba(0, 0, 0, 0.85);
  background:
    radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.28), transparent 45%),
    radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.22), transparent 40%),
    linear-gradient(145deg, #0b1220 0%, #102a43 55%, #0f172a 100%);
  color: #e8f1ff;
  display: flex;
  align-items: flex-end;
}

html:not(.dark) .brand-panel {
  border-color: rgba(20, 17, 17, 0.8);
}

.brand-glow {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 28px 28px;
  opacity: 0.7;
  pointer-events: none;
}

.brand-content {
  position: relative;
  z-index: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.brand-kicker {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  opacity: 0.7;
  font-weight: 600;
}

.brand-name {
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  line-height: 1;
}

.brand-tag {
  font-size: 0.95rem;
  opacity: 0.85;
  max-width: 18rem;
  line-height: 1.45;
}

.brand-link {
  margin-top: 0.6rem;
  width: fit-content;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 0.2rem;
  color: #9ed7ff;
}

.role-meta {
  display: inline-block;
}

@media only screen and (max-width: 1407px) {
  .content {
    font-size: 1em;
  }
}
@media only screen and (max-width: 1235px) {
  .content {
    font-size: 0.9em;
  }
}
@media only screen and (max-width: 1166px) {
  .content {
    font-size: 0.85em;
  }
}
@media only screen and (max-width: 1001px) {
  .content {
    font-size: 0.8em;
  }
}
@media only screen and (max-width: 941px) {
  .content {
    font-size: 0.75em;
  }
}
@media only screen and (max-width: 794px) {
  .content {
    font-size: 0.7em;
  }
}
@media only screen and (max-width: 715px) {
  .continer {
    flex-direction: column;
    gap: 0;
    width: 80%;

    & .content {
      padding: 6px;
    }
  }

  .brand-panel {
    min-width: 100%;
    min-height: 220px;
  }

  .role-meta {
    display: block;
    margin-left: 0 !important;
    margin-top: 0.35rem;
  }
}
</style>
