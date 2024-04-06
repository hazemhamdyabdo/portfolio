<script setup lang="ts">
import { ref } from "vue";

const isHoverd = ref(false);
const hoerMe = () => {
  isHoverd.value = true;
};
</script>
<template>
  <section class="center">
    <div class="main" font-base flex="~ col" gap-3 pt-5 relative>
      <p
        absolute
        top="-10"
        left="0"
        :class="['tooltip', { 'opacity-0': !isHoverd }]"
        w-fit
      >
        No website yet
      </p>

      <h2 @mouseenter="hoerMe" @mouseleave="isHoverd = false" w-fit>
        <p href="" n-link-text font-700 name="No Website yet" cursor-none>
          @DreamPos
        </p>
      </h2>

      <p>
        DreamPos is a FREELANCE Project that I've been working on since 2023. It
        is using to mange the POS system and invoice management system.
      </p>
      <div font-base space-y-2>
        <h3 text-white font-700>My Responsibilities</h3>
        <ul list-circle space-y-3>
          <li>
            Implementing a sign-in page to facilitate authorization and
            authentication processes.
          </li>
          <li>
            Developing an admin dashboard to provide a comprehensive summary of
            all invoices within the inventory.
          </li>
          <li>
            Creating reusable components such as DataTable, FormField,
            DatePicker, and NavigationBar to enhance scalability across the
            entire project.
          </li>
          <li>
            Implementing middleware functionality based on the user's access
            permissions to control and manage various features and
            functionalities.
          </li>
          <li>
            Collaborating with backend developers to integrate frontend
            components with backend systems and APIs.
          </li>
        </ul>
      </div>
    </div>

    <div class="img" relative mb-30>
      <div b="~ solid 2">
        <img src="@/assets/dream.png" alt="sable dashboard" />
      </div>
      <div class="two" absolute></div>
      <div class="three" absolute></div>
      <div class="four" absolute></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: space-between;
  width: 84%;
  gap: 1rem;
  margin: 0 auto;
  height: fit-content;
}
.img {
  // width: 1750px;
  & img {
    max-width: 620px;
    height: 320px;
    filter: brightness(1.2);
  }
  .two,
  .three,
  .four {
    top: 0rem;
    width: 620px;
    height: 320px;
  }

  .two {
    left: 0.8rem;
    top: 0.8rem;
    z-index: -1;
    background-color: black;
    border: 2px solid rgba(255, 255, 255, 0.918);
  }
  .three {
    left: 1.5rem;
    top: 1.5rem;
    z-index: -2;
    background-color: black;
    border: 2px solid rgba(255, 255, 255, 0.718);
  }
  .four {
    left: 2rem;
    top: 2rem;
    z-index: -3;
    background-color: black;
    border: 2px solid rgba(255, 255, 255, 0.518);
  }

  & .main {
    border: 2px solid white;
    padding-right: 1rem;
    height: fit-content;
  }
}
.tooltip {
  background-color: transparent;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: RED;
  font-weight: 600;
  transition: all 0.5s ease-in-out;
}

html.dark {
  .tooltip {
    border: 1px solid white;
  }
}

html {
  .tooltip {
    border: 1px solid black;
  }
}
@media (max-width: 1400px) {
  .img {
    width: 1350px;
    & img {
      max-width: 550px;
    }
    .two,
    .three,
    .four {
      width: 550px;
    }
  }
}
@media (max-width: 1300px) {
  .img {
    width: 1250px;
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
@media (max-width: 1200px) {
  .main {
    font-size: 0.9rem;
  }
  .img {
    width: 1050px;
    & img {
      max-width: 400px;
    }
    .two,
    .three,
    .four {
      width: 400px;
    }
  }
}
@media (max-width: 1000px) {
  .center {
    padding-left: 8rem;
  }
  .main {
    font-size: 0.85rem;
  }
  .img {
    width: 1050px;
    .two,
    .three,
    .four {
      width: 400px;
    }
  }
}
@media (max-width: 850px) {
  .center {
    padding-left: 6rem;
  }
  .img {
    width: 950px;
    & img {
      max-width: 350px;
    }
    .two,
    .three,
    .four {
      width: 350px;
    }
  }
}
@media (max-width: 760px) {
  .center {
    padding-left: 6rem;
  }
  .img {
    width: 890px;
    & img {
      max-width: 33.2rem;
    }
    .two,
    .three,
    .four {
      width: 300px;
    }
  }
}

/*
* mobile and small screen 320 to 480 px
*/

@media only screen and (max-width: 715px) {
  .center {
    padding: 0;
    flex-direction: column;
    width: 80%;

    .img {
      width: auto;
      & img {
        width: 100%;
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
