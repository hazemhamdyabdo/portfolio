<script setup lang="ts">
import PostLayout from "@/layout/PostLayout.vue";
</script>

<template>
  <PostLayout>
    <h2 second-head>Composable VS. Mixins</h2>
    <section>
      <h3 third-head>COMPOSABLES</h3>
      <h4 sub-head>WHAT DOES IT DO ?</h4>
      <ul>
        <li>
          Composables are modular functions introduced with Vue.js 3 that allow
          you to group reusable logic and use it in various places in your
          application.
        </li>
        <li>
          They are mainly used for state management and reactive data flow.
          Within a composable you can define data, computed properties and
          methods.
        </li>
      </ul>
      <h4 sub-head>HOW DOES IT WORK ?</h4>
      <ul>
        <li>
          Using Vue’s Composition API, you can extract complex logic from inside
          a component in a way that makes that logic reusable, testable and
          readable.
        </li>
        <li>
          A composable can be used to manage the logic of a shopping cart.
          Functions such as adding and removing items to the cart, calculating
          the total price are defined in the composable and can be used in
          different components.
        </li>
      </ul>
      <h4 sub-head>ADVANTAGES</h4>
      <ul>
        <li>It makes your code more modular and organized.</li>
        <li>
          It allows you to easily share and test logic between components.
        </li>
      </ul>
    </section>
    <section>
      <h3 third-head>MİXİNS</h3>
      <h4 sub-head>WHAT DOES IT DO ?</h4>
      <ul>
        <li>
          Mixins are used to add additional functionality to Vue components.
          They allow you to share component properties such as data, methods,
          calculated properties and lifecycle hooks.
        </li>
      </ul>
      <h4 sub-head>HOW DOES IT WORK ?</h4>
      <ul>
        <li>
          A mixin adds properties to a Vue component. This is similar to the
          process of adding a property with the Options API.
        </li>
        <li>
          A form validation mixin can contain common validation rules and
          methods to be used across different forms.
        </li>
      </ul>
      <h4 sub-head>DISADVANTAGES</h4>
      <ul>
        <li>
          Mixins can lead to complexity and name conflicts, especially in large
          projects. Also, it can be difficult to understand which component is
          using mixins.
        </li>
      </ul>
    </section>

    <section>
      <h3 third-head>THE DIFFERENCE BETWEEN COMPOSABLES AND MIXINS</h3>
      <ul>
        <li>
          Composables offer a more modern approach as modular functions and are
          compatible with the Composition API. Mixins extend the features using
          the Options API.
        </li>
        <li>
          Composables make your code cleaner and more understandable, whereas
          mixins can lead to complexity.
        </li>
        <li>
          Composables allow you to use Vue 3’s reactive system more efficiently,
          while mixins remain limited to legacy approaches.
        </li>
      </ul>

      <h4 sub-head>A SIMPLE EXAMPLE</h4>
      <ul>
        <li>
          Imagine you have a recipe book (your Vue.js application). Composables,
          like every recipe in this book, are reusable recipe cards containing
          specific ingredients (data) and preparation steps (methods). You can
          use each card in different dishes (ingredients).
        </li>
        <li>
          Mixins, on the other hand, can be thought of as adding a certain sauce
          (properties) each time you cook. This sauce can be applied to each
          dish (ingredient), but sometimes it can be difficult to keep track of
          which sauce is in which dish.
        </li>
      </ul>
    </section>

    <section>
      <h3 third-head>An example of using composables in Vue.js</h3>
      <ul>
        <li>
          As a simple composable example, let’s create a composable that manages
          the state and functions of a counter. This composable will hold the
          value of the counter and contain functions that increment and
          decrement the counter.
        </li>
      </ul>
      <h4 sub-head>Counter Composable Example (useCounter.js)</h4>
      <pre class="tages">
        // useCounter.js
          import { ref } from 'vue';

          export function useCounter() {
            const count = ref(0);

            function increment() {
              count.value++;
            }

            function decrement() {
              count.value--;
            }

            return { count, increment, decrement };
          }
      </pre>
      <ul>
        <li>
          In this composable, ref is used from Vue’s Composition API. We create
          a reactive reference called count. increment and decrement functions
          increment and decrement this counter. These functions and the variable
          count are returned to any component that uses composable.
        </li>
      </ul>
    </section>

    <section>
      <h3 third-head>Example of using mixins in Vue.js</h3>
      <ul>
        <li>
          We can create a mixin that performs a simple user tracking
          functionality. This mixin will track the login status of users and
          provide some additional information if the user is logged in.
        </li>
      </ul>
      <h4 sub-head>User Tracking Mixin Example (userMixin.js)</h4>
      <pre class="tages">
        // userMixin.js
          export default {
            data() {
              return {
                isUserLoggedIn: false,
                userName: '',
              };
            },
            methods: {
              login(user) {
                this.isUserLoggedIn = true;
                this.userName = user;
              },
              logout() {
                this.isUserLoggedIn = false;
                this.userName = '';
              },
            },
          };
      </pre>
      <ul>
        <li>
          In this mixin, the data function defines the reactive data, which
          includes the user login status and username, while the login and
          logout methods manage this state.
        </li>
      </ul>
    </section>

    <section>
      <h3 third-head>A few important reasons not to use Mixins in Vue.js</h3>
      <ul>
        <li>
          Mixins can cause conflicts between property and method names when more
          than one mixin is used. This makes it difficult to understand which
          properties or methods come from which mixin.
        </li>
        <li>
          Data and methods within mixins, when combined directly with
          components, can make those components complex and difficult to
          understand. This problem becomes even more pronounced in large and
          complex applications.
        </li>
        <li>
          Mixins are less flexible and modular compared to composables, although
          they provide reusable pieces of code in certain situations.
        </li>
        <li>
          Mixins are closer to Vue’s old Options API. The innovations and
          improvements brought by Vue 3 and the Composition API encourage the
          use of composables instead of mixins.
        </li>
      </ul>
      <h3 third-head>
        In conclusion DON'T use Mixins in Vue 3 always use Composables
      </h3>
      <ul>
        <li>
          Composables allow you to make your code in a more modular and
          organized way. Each composable covers a specific piece of
          functionality or logic, making your code more understandable and
          manageable.
        </li>
        <li>
          Composables allows you to define functionality and state management
          independently of components, which makes code reusability and
          maintenance easier.
        </li>
        <li>
          Since Composables are designed as reusable and independent functions,
          they can be easily used in different components and contexts.
        </li>
        <li>
          Composables works in harmony with other features of Vue 3 and the
          ecosystem. It integrates with other features such as hooks, routing,
          state management.
        </li>
      </ul>
    </section>
  </PostLayout>
</template>

<style scoped>
.tages {
  background-color: #121212;
  color: #dbd7caee;
  border-radius: 8px;
  padding: 0.8rem 0.4rem;
}
</style>
