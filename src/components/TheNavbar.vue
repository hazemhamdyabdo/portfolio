<script setup lang="ts">
import MainLogo from "./MainLogo.vue";
import MoonIcon from "./icons/MoonIcon.vue";
import SunIcon from "./icons/SunIcon.vue";
import GithubIcon from "./icons/GithubIcon.vue";
import LinkedinIcon from "../components/icons/LinkedinIcon.vue";
import EmailsIcon from "./icons/EmailsIcon.vue";
import WhatsAppIcon from "./icons/WhatsAppIcon.vue";
import { toggleDark, isDark } from "@/composables/toggle.ts";
</script>

<template>
  <nav flex="~ items-center justify-between" p4 px7>
    <RouterLink to="/">
      <MainLogo width="9rem" title="Hazem" />
    </RouterLink>
    <ul text-white flex="~ row " gap-5>
      <RouterLink :to="{ name: 'blogs' }">Blog</RouterLink>
      <RouterLink :to="{ name: 'projects' }">Projects</RouterLink>
      <RouterLink :to="{ name: 'demos' }">Demos</RouterLink>
      <a
        href="https://www.dropbox.com/scl/fi/hfratnk3l0zp3gsuamqw7/hazem_hamdy_resume.pdf?rlkey=k00ba91g7hlfrmrzw5u4posic&dl=0"
        target="_blank"
        >Reusme</a
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
a {
  color: rgb(170, 170, 170);
  font-weight: 600;

  &:hover {
    color: white;
  }
}
</style>
