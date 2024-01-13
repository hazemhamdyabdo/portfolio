<script setup lang="ts">
import VueIcon from "@/components/icons/VueIcon.vue";
import PostLayout from "@/layout/PostLayout.vue";
import MarkdownIt from "markdown-it";
const md = MarkdownIt();
const sync = md.render(`<!-- Vue 2 -->
<Component name.sync="name"/>

<!-- Vue 3 -->
<Component v-model:name="name"/>`);
</script>

<template>
  <PostLayout>
    <h2 second-head>Vue 3 Migration Notes</h2>
    <p class="border">
      Note: This is my personal notes/tips for migrating to Vue 3 and will be
      updated overtime. Please refer to the
      <a href="https://v3-migration.vuejs.org/" target="_blank" font-800>
        official docs</a
      >
      for the complete changelog.
    </p>
    <p>Sorted by the importance of my personal sense.</p>
    <div flex="~ items-center" gap2>
      <VueIcon text-xl />
      <p>.sync → v-model:</p>
    </div>
    <pre class="tages" v-html="sync"></pre>
    <p>
      <span class="tages">v-model</span> on native element would be
      <span class="tages">value/input</span>
      while on custom components, it changed to
      <span class="tages">modelValue</span> and
      <span class="tages">update:modelValue</span>
    </p>
    <div flex="~ items-center" gap2>
      <VueIcon text-xl />
      <p>asyncModal → defineAsyncComponent:</p>
    </div>
    <p>
      Previously, async components were created by simply defining a component
      as a function that returned a promise, such as:
    </p>
    <pre class="tages">const asyncModal = () => import('./Modal.vue')</pre>
    <p>Or, for the more advanced component syntax with options:</p>
    <pre class="tages">
      const asyncModal = {
      component: () => import('./Modal.vue'),
      delay: 200,
      timeout: 3000,
      error: ErrorComponent,
      loading: LoadingComponent
    }
    </pre>
    <h4 sub-head>3.x Syntax</h4>
    <p>
      Now, in Vue 3, since functional components are defined as pure functions,
      async components definitions need to be explicitly defined by wrapping it
      in a new <span class="tages">defineAsyncComponent</span> helper:
    </p>
    <pre class="tages">
 
      import { defineAsyncComponent } from 'vue'
      import ErrorComponent from './components/ErrorComponent.vue'
      import LoadingComponent from './components/LoadingComponent.vue'

      // Async component without options
      const asyncModal = defineAsyncComponent(() => import('./Modal.vue'))

      // Async component with options
      const asyncModalWithOptions = defineAsyncComponent({
        loader: () => import('./Modal.vue'),
        delay: 200,
        timeout: 3000,
        errorComponent: ErrorComponent,
        loadingComponent: LoadingComponent
      })
    </pre>
  </PostLayout>
</template>

<style lang="scss" scoped>
.border {
  border: 0 solid #adafb2;
  border-width: 0 0 0 3px;
  /* outline-offset: 2rem; */
  padding-left: 0.4rem;
}
.tages {
  background-color: #121212;
  color: #dbd7caee;
  border-radius: 8px;
  padding: 0 0.4rem;
}
</style>
