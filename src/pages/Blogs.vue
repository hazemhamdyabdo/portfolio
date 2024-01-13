<script setup lang="ts">
import Blog from "@/pages/posts/2024/Blog.vue";
import PreBlog from "@/pages/posts/2023/Blog.vue";
</script>

<template>
  <section space-y-8xl>
    <h2 dark:text-white text-4xl font-400 mt-8 text-black>Blogs</h2>
    <div flex="~ col" gap-40 class="slide-enter">
      <Blog />
      <PreBlog />
    </div>
  </section>
</template>

<style scoped lang="scss">
a {
  font-weight: 600;

  &:hover {
    color: white;
  }
}

.details {
  display: flex;
  gap: 1.8rem;
  & li:not(:first-child) {
    list-style-type: disc;
  }

  & p {
    font-size: small;

    margin-left: -0.5rem;
    color: rgb(95, 95, 95);
  }
}
</style>
