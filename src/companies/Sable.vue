<script setup lang="ts">
import { ref } from "vue";

const isHoverd = ref(false);
const hoerMe = () => {
  isHoverd.value = true;
};
</script>
<template>
  <div font-base flex="~ col" gap-3 pt-5 relative>
    <p absolute top="-10" left="0" v-if="isHoverd" w-fit class="tooltip">
      No website yet
    </p>

    <h2 @mouseenter="hoerMe" @mouseleave="isHoverd = false" w-fit>
      <p href="" n-link-text font-700 name="No Website yet" cursor-none>
        @SoftDigital
      </p>
    </h2>

    <p>
      SoftDigital is a global outsourcing company specializing in project
      management across diverse industries. Our team is dedicated to developing
      innovative features, resolving issues, and crafting intuitive UI designs
      for clients worldwide.
    </p>
    <div font-base space-y-2>
      <h3 text-white font-700>My Responsibilities</h3>
      <ul list-circle space-y-3>
        <li>
          I contributed to a diverse range of projects encompassing e-commerce
          platforms and dashboard applications.
        </li>
        <li>
          I tailor access levels according to each user's role within the
          project, enabling distinct actions based on their specific
          responsibilities.
        </li>
        <li>
          Worked closely with UX and UI teams ensuring seamless implementations.
        </li>
      </ul>
    </div>
  </div>

  <div class="img" relative mb-30>
    <div b="~ solid 2">
      <img src="@/assets/sable-company.png" alt="sable dashboard" />
    </div>
    <div class="two" absolute></div>
    <div class="three" absolute></div>
    <div class="four" absolute></div>
  </div>
</template>

<style lang="scss" scoped>
.img {
  & img {
    width: 1800px;
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
  }
}

.tooltip {
  background-color: rgba(255, 255, 255, 0.518);
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: RED;
  font-weight: 600;
}
</style>
