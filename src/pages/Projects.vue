<script setup lang="ts">
import Payaino from "@/companies/Payiano.vue";
import Dory from "@/companies/Dory.vue";
</script>

<template>
  <section class="sec">
    <div class="continer">
      <Payaino />
    </div>
    <div class="center">
      <Dory />
    </div>
  </section>
</template>

<style scoped lang="scss">
.sec {
  display: grid;
  place-items: center;
  gap: 15rem;
}
html.dark {
  .continer {
    border: 2px solid rgba(255, 255, 255, 0.801);
  }
}
html {
  .continer {
    border: 2px solid rgba(20, 17, 17, 0.801);
  }
}

.center {
  display: flex;
  justify-content: space-between;
  width: 84%;
  gap: 2rem;
  padding: 0 1rem 0 0;
}

.continer {
  display: flex;
  justify-content: space-between;
  width: 84%;
  border-radius: 8px;
  overflow: hidden;
  gap: 2rem;
  padding: 0 1rem 0 0;
}
</style>
