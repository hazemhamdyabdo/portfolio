<template>
  <nav></nav>
  <main flex="~ justify-center items-center">
    <RouterView />
    <TheCanvas />
  </main>
  <footer></footer>
</template>

<script setup lang="ts">
import TheCanvas from "./components/TheCanvas.vue";
</script>

<style>
body {
  background-color: black;
  overflow-x: hidden;
}
</style>
