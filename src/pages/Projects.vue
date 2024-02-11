<script setup lang="ts">
import Payaino from "@/companies/Payiano.vue";
import Dory from "@/companies/Dory.vue";
import Sable from "@/companies/Sable.vue";
import DownLeftArrow from "@/components/DownLeftArrow.vue";
import DownRightArrow from "@/components/DownRightArrow.vue";
</script>

<template>
  <section class="sec slide-enter">
    <div>
      <div class="continer">
        <Payaino />
      </div>
      <DownLeftArrow />
    </div>
    <div>
      <div class="center">
        <Sable />
      </div>
      <DownRightArrow />
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

.center {
  display: flex;
  justify-content: space-between;
  width: 84%;
  gap: 1rem;
  padding: 0 1rem 0 0;
  margin: 0 auto;
}

.continer {
  display: flex;
  justify-content: space-between;
  width: 84%;
  border-radius: 8px;
  overflow: hidden;
  gap: 2rem;
  padding: 0 1rem 0 0;
  margin: 0 auto;
}
</style>
