<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

import { toggleDark, isDark } from "@/composables/toggle.ts";
import MainLogo from "./MainLogo.vue";
import MoonIcon from "./icons/MoonIcon.vue";
import SunIcon from "./icons/SunIcon.vue";
import GithubIcon from "./icons/GithubIcon.vue";
import LinkedinIcon from "../components/icons/LinkedinIcon.vue";
import EmailsIcon from "./icons/EmailsIcon.vue";
import WhatsAppIcon from "./icons/WhatsAppIcon.vue";
import HamburgerMenue from "./icons/HamburgerMenue.vue";
import MenuClose from "./icons/MenuClose.vue";

const isMenueOpen = ref(false);
const onScroll = () => {
  const currentScrollPosition = document.documentElement.scrollTop;
  if (currentScrollPosition < 0) {
    return;
  }
  isMenueOpen.value = false;
};
onMounted(() => {
  document.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  document.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <nav flex="~ items-center justify-between" p4 px7 relative>
    <RouterLink to="/" z-80 class="logo">
      <MainLogo width="9rem" title="Hazem" />
    </RouterLink>
    <ul text-white flex="~ row " gap-5 class="hide">
      <RouterLink :to="{ name: 'blogs' }">Blog</RouterLink>
      <RouterLink :to="{ name: 'projects' }">Projects</RouterLink>
      <!-- <RouterLink :to="{ name: 'demos' }">Demos</RouterLink> -->
      <a
        href="https://drive.google.com/file/d/1uW1JPc54JU0XTjHnBGj6JxK9k8nqB93e/view"
        target="_blank"
        >Resume</a
      >

      <a
        href="mailto:hazemhamdy117@gmail.com"
        title="mail me"
        text-xl
        cursor-pointer
      >
        <EmailsIcon />
      </a>
      <a
        href="https://wa.me/+201120922588"
        title="let's chat"
        text-xl
        cursor-pointer
        target="_blank"
      >
        <WhatsAppIcon />
      </a>
      <a
        href="https://github.com/hazemhamdyabdo"
        title="Github"
        target="_blank"
      >
        <GithubIcon text-xl cursor-pointer />
      </a>

      <a
        href="https://www.linkedin.com/in/hazemhamdyabdo/"
        text-xl
        cursor-pointer
        target="_blank"
        title="LinkedIn"
      >
        <LinkedinIcon />
      </a>

      <MoonIcon
        @click="toggleDark"
        v-if="isDark"
        text-gray
        text-xl
        cursor-pointer
      />
      <SunIcon @click="toggleDark" v-else text-xl cursor-pointer text-black />
    </ul>
    <HamburgerMenue
      @click="isMenueOpen = !isMenueOpen"
      class="show text-3xl font-base"
      pointer
      v-if="!isMenueOpen"
      absolute
      right-4
      top-10
    />
    <MenuClose
      @click="isMenueOpen = !isMenueOpen"
      v-else
      class="text-3xl font-base hide-mini"
      absolute
      right-4
      top-10
      z-80
    />
    <ul
      v-if="isMenueOpen"
      flex="~ col items-center"
      class="nav hide-mini"
      :class="{ active: isMenueOpen }"
      @click="isMenueOpen = !isMenueOpen"
    >
      <RouterLink :to="{ name: 'blogs' }">Blog</RouterLink>
      <RouterLink :to="{ name: 'projects' }">Projects</RouterLink>
      <!-- <RouterLink :to="{ name: 'demos' }">Demos</RouterLink> -->
      <a
        href="https://drive.google.com/file/d/1uW1JPc54JU0XTjHnBGj6JxK9k8nqB93e/view"
        target="_blank"
        >Resume</a
      >

      <a
        href="mailto:hazemhamdy117@gmail.com"
        title="mail me"
        text-xl
        cursor-pointer
      >
        <EmailsIcon />
      </a>
      <a
        href="https://wa.me/+201120922588"
        title="let's chat"
        text-xl
        cursor-pointer
        target="_blank"
      >
        <WhatsAppIcon />
      </a>
      <a
        href="https://github.com/hazemhamdyabdo"
        title="Github"
        target="_blank"
      >
        <GithubIcon text-xl cursor-pointer />
      </a>

      <a
        href="https://www.linkedin.com/in/hazemhamdyabdo/"
        text-xl
        cursor-pointer
        target="_blank"
        title="LinkedIn"
      >
        <LinkedinIcon />
      </a>

      <MoonIcon
        @click="toggleDark"
        v-if="isDark"
        text-gray
        text-xl
        cursor-pointer
      />
      <SunIcon @click="toggleDark" v-else text-xl cursor-pointer text-black />
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
a.router-link-active:not(.logo) {
  border-bottom: 1px solid black;
  outline-offset: 0.6rem;
  border-radius: 6px;
  padding-bottom: 5px;
}
html.dark {
  a.router-link-active:not(.logo) {
    border-bottom: 1px solid white;
  }
}

a {
  color: rgb(170, 170, 170);
  font-weight: 600;
}

html {
  a:hover {
    color: black;
  }
}
html.dark {
  a:hover {
    color: white;
  }
}
.show {
  display: none;
}
.hide-mini {
  display: none;
}
@media (max-width: 600px) {
  .hide {
    display: none;
  }
  .hide-mini {
    display: flex;
  }
  .show {
    display: block;
  }

  .nav {
    position: absolute;
    width: 60%;
    height: calc(100vh - 50px);
    top: 0px;
    transition: 0.5s;
    justify-content: center;
    z-index: 5;
    background: rgba(255, 255, 255, 0);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.9px);
    -webkit-backdrop-filter: blur(5.9px);
    border: 1px solid rgba(255, 255, 255, 0.152);

    & a {
      height: 50px;
      line-height: 50px;
      padding: 0 20px;
      text-decoration: none;
      display: block;
      font-weight: 800;

      &:active {
        flood-color: white;
        background: lightgray;
        transition: 0.5s;
      }
    }
  }

  .active {
    right: 0;
  }
}
</style>
