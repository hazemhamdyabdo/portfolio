<script setup lang="ts">
import PostLayout from "@/layout/PostLayout.vue";
import MarkdownIt from "markdown-it";

const md = MarkdownIt();
const key = md.render(`<div v-for="item in items" :key="item.id">`);
const noKey = md.render(`❌ <div v-for="(user, index) in users" :key="index">`);

/**
 * @TODO: contine the mistakes of vue get jus 5 contine with pop drilling
 */
</script>

<template>
  <PostLayout>
    <h2 second-head>Common Vue.js Mistakes and How to Avoid Them</h2>
    <p>
      There are some mistakes that all Vue.js developers make at one time or
      another. Know what they are so that you can avoid them.
    </p>
    <h3 third-head>1- Omitting the Key Directive on v-for</h3>
    <p>
      When working with v-for in Vue it is typically recommended to provide a
      special key attribute. Something like this
    </p>
    <div>
      <pre class="tages" v-html="key"></pre>
    </div>
    <ul>
      <li>
        The purpose of this key attribute is to give "a hint for Vue's virtual
        DOM algorithm to identify VNodes when diffing the new list of nodes
        against the old list"
      </li>
      <li>
        Essentially, it helps Vue identify what's changed and what hasn't. Thus
        it does not have to create any new DOM elements or move any DOM elements
        if it doesn't have to.
      </li>
      <li>
        Throughout my experience with Vue I've seen some misunderstanding around
        the key attribute (as well as had plenty of misunderstanding of it on my
        own) and so I want to provide some tips on how to and how NOT to use it.
      </li>
    </ul>
    <h4 sub-head>No indexes as keys</h4>
    <p>
      You should not use array indexes as keys since indexes are only indicative
      of an items position in the array and not an identifier of the item
      itself.
    </p>
    <pre class="tages" v-html="noKey"></pre>
    <ul>
      <li>
        Why does that matter? Because if a new item is inserted into the array
        at any position other than the end, when Vue patches the DOM with the
        new item data, then any data local in the iterated component will not
        update along with it.
      </li>
      <li>
        Why does that matter? Because if a new item is inserted into the array
        at any position other than the end, when Vue patches the DOM with the
        new item data, then any data local in the iterated component will not
        update along with it.
      </li>
    </ul>
    <h3 third-head>2- Prop Drilling</h3>
    <p>
      Prop drilling is an anti-pattern where the developer passes down a prop
      through multiple levels of components simply to access data defined higher
      up the tree in a deeply nested level.
    </p>
    <p>
      Coding this way can lead to hard-to-maintain code. Learn how to avoid prop
      drilling with provide/inject or via a global state management solution.
    </p>
    <img src="@/assets/prop-drilling.FyV2vFBP.png" alt="Prop Driling" />
    <p>
      We can solve props drilling with <span class="tages"> provide </span>and
      <span class="tages"> inject</span>. A parent component can serve as a
      dependency provider for all its descendants. Any component in the
      descendant tree, regardless of how deep it is, can inject dependencies
      provided by components up in its parent chain.
    </p>
    <h4 third-head>Provide</h4>
    <pre class="tages">
      import { ref, provide } from 'vue'

      const count = ref(0)
      provide('key', count)
    </pre>
    <h4 third-head>Inject</h4>
    <pre class="tages">
      import { inject } from 'vue'

      const message = inject('message')
    </pre>

    <h3 third-head>3- Forgetting to Clean Up Your Manual Event Listeners</h3>
    <p>
      clean up global event listeners on unMounted in Vue.js. Why are global
      event listeners necessary? Because sometimes we want the event to fire
      even outside of the focus of elements within the current component. Why
      should we clean them up? Failing to do so will result in memory leaks and
      degrading application performance.
    </p>
    <pre class="tages">
    onMounted(()=>{
      document.body.addEventListener("keydown",handleCallBackFn)
    })
    
    onUnmounted(()=>{
      document.body.removeEventListener("keydown",handleCallBackFn)
    })
    </pre>

    <h3 third-head>4- Destructuring Reactive Data</h3>
    <p>
      why it’s not a good idea to de-structure reactive data defined with the
      reactive function.
    </p>
    <ol>
      <li>
        <h4 sub-head>Loss of Reactivity</h4>
        <p>
          Destructuring a reactive object can result in the loss of reactivity
          for the extracted properties. Reactive objects work by wrapping their
          properties in proxies, enabling Vue to track changes. When you
          destructure and extract a property, you are essentially working with a
          standalone value, and Vue loses its ability to track changes to that
          specific property.
        </p>
      </li>
      <li>
        <h4 sub-head>Reactivity Limitations.</h4>
        <p>
          Vue's reactivity system is designed to work optimally with entire
          objects. When you destructure and extract individual properties, you
          might miss out on some of the powerful features that Vue provides for
          handling reactivity at the object level.
        </p>
      </li>
    </ol>
    <pre class="tages">
    import { reactive } from 'vue';

    const state = reactive({
      user: {
        name: 'John Doe',
        age: 25,
      },
      isAdmin: false,
    });

    // Destructuring user
    const { user } = state;

    // Modifying user.name won't trigger reactivity
    user.name = 'Jane Doe';
    </pre>
    <h4 sub-head>Instead you should</h4>
    <ol>
      <li>Reference the reactive object directly</li>
      <li>
        Define a computed prop (if you’re ok with the data being read only)
      </li>
      <li>Use toRefs</li>
    </ol>
  </PostLayout>
</template>

<style scoped>
.tages {
  background-color: #121212;
  color: #dbd7caee;
  border-radius: 8px;
  padding: 0 0.4rem;
  margin: 0;
}
</style>
