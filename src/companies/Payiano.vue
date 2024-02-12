<template>
  <section class="continer">
    <div class="img">
      <img src="@/assets/payiano.png" alt="Payaino Landing-page" />
    </div>
    <div flex="~ col " gap-2 pt-5 class="content">
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
            Refactor and restructured Pinia store, optimizing application’s
            state management; reduced load time by 25% and enhanced overall
            performance
          </li>
          <li>
            Optimized system eﬀiciency by integrating API endpoints using Proxy
            Server and leveraging caching methodologies, leading to a 40%
            decrease in API calls and a notable improvement in system
            performance.
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.img {
  max-height: max-content;
  & img {
    height: 450px;
    width: 120rem;
  }
}

.continer {
  display: flex;
  justify-content: space-between;
  width: 84%;
  border-radius: 8px;
  overflow: hidden;
  gap: 2rem;
  margin: 0 auto;
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
    gap: 0rem;
    width: 80%;

    & .content {
      padding: 6px;
    }
    & img {
      width: auto;
    }
  }
}
</style>
