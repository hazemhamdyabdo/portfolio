<template>
  <section class="center">
    <div class="img" relative mb-30>
      <div b="~ solid 2">
        <img src="@/assets/Hectar.png" alt="HectarPlus Landing-page" />
      </div>
      <div class="two" absolute></div>
      <div class="three" absolute></div>
      <div class="four" absolute></div>
    </div>

    
    <div flex="~ col" gap-2 pt-5 class="content">
      <h3 dark:text-white font-600>
        <a href="https://hectarplus.io/" dark:n-link-text target="_blank">
          @Hectar
        </a>
      </h3>
      <p font-base>
        At Hectar, We play a crucial role in creating an engaging and
        user-friendly interface for real estate entities to manage their
        business operations and procedures effectively.
      </p>
      <div>
        <h4 third-head mb-4>My Responsibilities</h4>
        <ul font-base list-circle space-y-2>
          <li>
            Ensuring that the frontend components work consistently across
            different web browsers and devices.
          </li>
          <li>
            Optimizing frontend code and assets to improve page load times and
            overall system performance.
          </li>
          <li>
            Implementing accessibility best practices to ensure that the system
            is usable by people with disabilities.
          </li>
          <li>
            Collaborating with backend developers to integrate frontend
            components with backend systems and APIs.
          </li>
          <li>
            Using version control systems like Git to manage code changes and
            collaborate with other developers effectively.
          </li>
          <li>
            Integrating third-party services and APIs into the system to enhance
            its capabilities and interoperability.
          </li>
          <li>
            Conducting frontend testing, including unit tests and end-to-end
            tests, to identify and fix any issues or bugs.
          </li>
          <li>
            Documenting frontend code and components to facilitate maintenance
            and future development.
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
  max-height: max-content;
  & img {
    height:  500px;
    width: 100%;
    
  }
  .two,
  .three,
  .four {
    top: 0rem;
    width: calc(100% + 0.2rem);
    height: 100%;
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
