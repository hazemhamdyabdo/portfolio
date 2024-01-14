<script setup lang="ts"></script>

<template>
  <div class="img">
    <img src="@/assets/payiano.png" alt="Payaino Landing-page" />
  </div>
  <div flex="~ col " gap-2 pt-5>
    <h3 dark:text-white font-600>
      <a href="https://payiano.com/" dark:n-link-text target="_blank">
        @Payiano
      </a>
    </h3>
    <p font-base>
      At Payiano, we provide all the necessary tools to create websites and
      applications that enable payment acceptance and payout distribution. Our
      products cater to a wide range of businesses, from online and in-person
      retailers to subscription-based companies, software platforms, and
      marketplaces.
    </p>
    <div>
      <h4 third-head>My Responsibilities</h4>
      <ul font-base list-circle space-y-2>
        <li>
          Developed and managed web applications using VueJS, Pinia, Vuetify,
          and TypeScript to ensure improved code quality and long-term
          maintainability.
        </li>
        <li>
          Migrated the front-end code base front Webpack to VITE, helping the
          productivity of developers by reducing development server start time
          by 20% and production by 8%.
        </li>
        <li>
          Refactor and restructured Pinia store, optimizing application’s state
          management; reduced load time by 25% and enhanced overall performance
        </li>
        <li>
          Optimized system eﬀiciency by integrating API endpoints using Proxy
          Server and leveraging caching methodologies, leading to a 40% decrease
          in API calls and a notable improvement in system performance.
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.img {
  max-height: max-content;
  & img {
    height: 27rem;
    width: 120rem;
  }
}
</style>
