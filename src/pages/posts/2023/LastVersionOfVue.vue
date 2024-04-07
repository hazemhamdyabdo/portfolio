<script setup lang="ts">
import PostLayout from "@/layout/PostLayout.vue";
import HappyFace from "@/components/icons/HappyFace.vue";
// @ts-ignore
import markdownit from "markdown-it";

const md = markdownit();

const watch = md.render(`\`\`\`ts 
const count = ref(0) 
const isEven = computed(() => count.value % 2 === 0)
watchEffect(() => console.log(isEven.value))  // logs true
count.value = 2 // logs true again)
`);
const exBind = md.render(`\`\`\`js
<img :id="id" :src="src" :alt="alt">
`);

const curBind = md.render(`\`\`\`js
<img :id :src :alt>
`);
</script>
background-color: rgb(255, 255, 255); color: rgb(57, 58, 52);

<template>
  <PostLayout>
    <h2 second-head>Announcing Vue 3.4</h2>
    <p text-base>
      This release includes some substantial internal improvements - most
      notably a rewritten template parser that is 2x faster, and a refactored
      reactivity system that makes effect triggering more accurate and
      efficient. It also packs a number of quality-of-life API improvements,
      including the stabilization of defineModel and a new same-name shorthand
      when binding props.
    </p>
    <div>
      <h3 sub-head>1- More Efficient Reactivity System</h3>
      <p text-base>
        3.4 also ships a substantial refactor of the reactivity system, with the
        goal of improving re-compute efficiency of computed properties.
      </p>
      <p>
        To illustrate what is being improved, let's consider the following
        scenario:
      </p>
      <div>
        <pre p0 class="tages" text-lg v-html="watch"></pre>
      </div>
      <p text-base>
        Before 3.4, the callback of
        <span class="tages"> watchEffect</span>
        will fire every time <span class="tages"> count.value</span> is changed,
        even if the computed result remains the same. With the post-3.4
        optimizations, the callback now only fires if the computed result has
        actually changed.
      </p>
      <div>
        <h3 sub-head>
          <span class="tages">
            <a
              href="https://vuejs.org/api/sfc-script-setup.html#definemodel"
              target="_blank"
              >defineModel</a
            ></span
          >
          is Now Stable <HappyFace inline />
        </h3>

        <p>
          <span class="tages"
            ><a
              href="https://vuejs.org/api/sfc-script-setup.html#definemodel"
              target="_blank"
              >defineModel</a
            >
          </span>
          is a new <span class="tages"> &lt;script setup> </span> macro that
          aims to simplify the implementation of components that support
          <span class="tages">v-model</span>. It was previously shipped in 3.3
          as an experimental feature, and has graduated to stable status in 3.4.
          It now also provides better support for usage with
          <span class="tages">v-model</span> modifiers.
        </p>
      </div>
      <div>
        <h3><span class="tages">v-bind</span> Same-name Shorthand</h3>
        <p>You can now shorten this:</p>
        <pre p0 class="tages" text-lg v-html="exBind"></pre>
        <p>To this:</p>
        <pre p0 class="tages" text-lg v-html="curBind"></pre>
        <p>
          This feature has been frequently requested in the past. Originally, we
          had concerns about its usage being confused with boolean attributes.
          However, after revisiting the feature, we now think it makes sense for
          <span class="tages">v-bind</span> to behave a bit more like JavaScript
          than native attributes, considering its dynamic nature.
        </p>
      </div>
    </div>
  </PostLayout>
</template>

<style>
.tages {
  background-color: #121212;
  color: #dbd7caee;
  border-radius: 8px;
  padding: 0 0.4rem;
}
</style>
