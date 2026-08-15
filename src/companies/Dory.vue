<template>
  <section class="center">
    <div class="img" relative mb-30>
      <div b="~ solid 2">
        <img src="@/assets/Dory-home.png" alt="Dory home-page" />
      </div>
      <div class="two" absolute></div>
      <div class="three" absolute></div>
      <div class="four" absolute></div>
    </div>

    <div font-base flex="~ col" gap-3 pt-5 class="main">
      <h2>
        <a
          href="https://www.dorysoftware.com/"
          n-link-text
          font-700
          target="_blank"
          rel="noopener noreferrer"
          >@DorySoftware</a
        >
        <span op60 text-sm font-500 ml-2>Jan 2022 – May 2022</span>
      </h2>
      <p>
        Custom software studio delivering practical business apps. I shipped
        e-commerce, booking, and real-estate experiences with shared UI kits and
        charting.
      </p>
      <div font-base space-y-2>
        <h3 text-white font-700>My Responsibilities</h3>
        <ul list-circle space-y-3>
          <li>
            Developed web applications including e-commerce, booking systems,
            and real estate platforms.
          </li>
          <li>
            Built reusable UI components such as data tables, form wizards, and
            shared utilities to accelerate delivery.
          </li>
          <li>
            Implemented data visualization using Highcharts, AmCharts, and
            Chart.js.
          </li>
          <li>
            Conducted code reviews and supported junior developers.
          </li>
          <li>
            Worked closely with design teams to deliver consistent,
            user-friendly interfaces.
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
    width: 620px;
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
