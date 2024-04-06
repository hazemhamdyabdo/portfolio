<template>
  <section class="center">
    <div class="img" relative mb-30>
      <div b="~ solid 2">
        <img src="@/assets/payiano.png" alt="Payaino Landing-page" />
      </div>
      <div class="two" absolute></div>
      <div class="three" absolute></div>
      <div class="four" absolute></div>
    </div>

    <div font-base flex="~ col" gap-3 pt-5 class="main">
      <h2 dark:text-white font-600>
        <a href="https://payiano.com/" dark:n-link-text target="_blank">
          @Payiano
        </a>
      </h2>
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
.center {
  display: flex;
  justify-content: space-between;
  width: 84%;
  gap: 2rem;
  margin: 0 auto;
}
.img {
  // width: auto;
  & img {
    max-width: 620px;
    height: 320px;
  }
  .two,
  .three,
  .four {
    top: 0rem;
    width: 532px;
    height: 320px;
  }

  .two {
    right: 0.8rem;
    top: 0.8rem;
    z-index: -1;
    background-color: black;
    border: 2px solid rgba(255, 255, 255, 0.918);
  }
  .three {
    right: 1.5rem;
    top: 1.5rem;
    z-index: -2;
    background-color: black;
    border: 2px solid rgba(255, 255, 255, 0.718);
  }
  .four {
    right: 2rem;
    top: 2rem;
    z-index: -3;
    background-color: black;
    border: 2px solid rgba(255, 255, 255, 0.518);
  }
}
@media (max-width: 1400px) {
  .img {
    width: 1150px;
    & img {
      max-width: 500px;
    }
    .two,
    .three,
    .four {
      width: 500px;
    }
  }
}
@media (max-width: 1300px) {
  .main {
    font-size: 0.85rem;
    width: 80%;
  }
  .img {
    width: 680px;
    & img {
      max-width: 480px;
    }
    .two,
    .three,
    .four {
      width: 480px;
    }
  }
}
@media (max-width: 1200px) {
  .img {
    width: 520px;
    & img {
      max-width: 380px;
    }
    .two,
    .three,
    .four {
      width: 380px;
    }
  }
}
@media (max-width: 1100px) {
  .main {
    width: 60%;
  }
  .img {
    width: 380px;
    & img {
      max-width: 375px;
    }
    .two,
    .three,
    .four {
      width: 370px;
    }
  }
}
@media (max-width: 1000px) {
  .center {
    padding-left: 8rem;
  }
  .img {
    width: 360px;
    & img {
      width: 100%;
    }
    .two,
    .three,
    .four {
      width: 340px;
    }
  }
}
@media only screen and (max-width: 715px) {
  .center {
    flex-direction: column;
    width: 80%;
    gap: 0;
    padding: 0;
    .main {
      width: 100%;
      padding: 0;
      margin-top: -5rem;
    }
    .img {
      width: auto;
      & img {
        max-width: 100%;
      }
      .two,
      .three,
      .four {
        display: none;
      }
    }
  }
}

@media only screen and (max-width: 480px) {
  .center {
    .img {
      width: auto;
      height: auto;
      .two,
      .three,
      .four {
        display: none;
      }
    }
  }
}
</style>
