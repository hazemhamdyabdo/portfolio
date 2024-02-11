<template>
  <a href="#" b="1 dark-100">
    <video
      src="/demos/2023-06-06.mp4"
      b="1 dark-100"
      w-full
      loop
      autoplay
      playsinline
    ></video>
    <div bg-black p-3>
      <h3 third-head mb-3>Movies With Nuxt</h3>
      <ul
        font-base
        flex="~ gap-5 items-center justify-centern"
        list-circle
        list-inside
        font-bold
        h-full
      >
        <li class="text-blue">TypeScript</li>

        <li class="text-[#00DC82]">Nuxt</li>
        <li class="text-[#38BDF8]">Tailwind</li>
        <li>Unocss</li>
      </ul>
      <li class="text-[#e55d00]" list-circle font-bold>Proxy Server</li>
    </div>
  </a>
</template>

<script setup lang="ts"></script>

<style scoped></style>
