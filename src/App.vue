<template>
  <nav>
    <TheNavbar />
  </nav>
  <main flex="~ justify-center items-center">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </Transition>
    </RouterView>
    <Plum />
  </main>
  <footer></footer>
</template>

<script setup lang="ts">
import Plum from "@/interactivity/Plum.vue";
import TheNavbar from "./components/TheNavbar.vue";
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
