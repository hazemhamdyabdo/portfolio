<script setup lang="ts">
import Payaino from "@/companies/Payiano.vue";
import Dory from "@/companies/Dory.vue";
import Sable from "@/companies/Sable.vue";
import DownLeftArrow from "@/components/DownLeftArrow.vue";
import DownRightArrow from "@/components/DownRightArrow.vue";
import Hectar from "@/companies/Hectar.vue";
</script>

<template>
  <section class="sec slide-enter">
    <div>
      <Hectar />
      <DownLeftArrow />
    </div>
    <div>
      <Payaino />
      <DownRightArrow />
      <Sable />
      <DownLeftArrow />
      <!-- <DownLeftArrow /> -->
    </div>
    <Dory />
  </section>
</template>

<style scoped lang="scss">
.sec {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
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
@media only screen and (max-width: 715px) {
  .sec {
    justify-content: flex-start;
    align-items: flex-start;
  }
}
</style>
