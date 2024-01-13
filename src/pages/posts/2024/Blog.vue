<script setup lang="ts">
import { blogs } from "@/utils/index.ts";
import BlogYear from "@/components/BlogYear.vue";
</script>

<template>
  <section>
    <div relative>
      <BlogYear :year="2024" />
      <ul font-base space-y-2xl text-xl>
        <li v-for="blog in blogs" :key="blog.title">
          <ul class="details">
            <li>
              <RouterLink
                :to="{
                  name: 'content',
                  params: {
                    title: blog.title.split(' ').join('-'),
                  },
                }"
                >{{ blog.title }}
              </RouterLink>
            </li>
            <li>
              <p>{{ blog.date }}</p>
            </li>
            <li>
              <p>{{ blog.duration }} min</p>
            </li>
          </ul>
        </li>
      </ul>
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
