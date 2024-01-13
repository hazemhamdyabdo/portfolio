<script setup lang="ts">
import Arrow from "@/components/Arrow.vue";
</script>

<template>
  <div class="img" relative mb-30>
    <div b="~ solid 2">
      <img src="@/assets/Dory-home.png" alt="Dory home-page" />
    </div>
    <div class="two" absolute></div>
    <div class="three" absolute></div>
    <div class="four" absolute></div>
  </div>

  <div font-base flex="~ col" gap-3 pt-5>
    <h2>
      <a href="https://www.dorysoftware.com/" n-link-text font-700
        >@DorySoftware</a
      >
    </h2>
    <p>
      Serving the needs of business owners around the world, Dory Software
      focuses on offering our clients real-world solutions to all of their
      software needs and we offer custom applications and processes to meet your
      goals.
    </p>
    <div font-base space-y-2>
      <h3 text-white font-700>My Responsibilities</h3>
      <ul list-circle space-y-3>
        <li>
          Worked on various of small projects like e-commerce, real estate
          management systems and booking web applications.
        </li>
        <li>
          Devised and maintained various types of critical reusable components
          like data tables, wizards, utils..etc to accelerate the development
          delivery.
        </li>
        <li>
          Worked closely with UX and UI teams ensuring seamless implementations.
        </li>
      </ul>
    </div>
  </div>

  <Arrow />
</template>

<style scoped lang="scss">
.img {
  & img {
    width: 100rem;
    height: 20rem;
  }
  .two,
  .three,
  .four {
    top: 0rem;
    width: 39.3rem;
    height: 20rem;
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

  & .main {
    border: 2px solid white;
  }
}
</style>
