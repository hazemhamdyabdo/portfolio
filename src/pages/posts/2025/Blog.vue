<script setup lang="ts">
import { blogs2025 } from "@/utils/index.ts";
import BlogYear from "@/components/BlogYear.vue";
</script>

<template>
  <section>
    <div class="container" relative>
      <BlogYear :year="2025" />
      <ul font-base space-y-2xl text-xl>
        <li v-for="blog in blogs2025" :key="blog.title">
          <ul class="details">
            <li>
              <RouterLink
                :to="{
                  name: 'content',
                  params: {
                    title: blog.route,
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

@media (max-width: 460px) {
  .container {
    padding-left: 1rem;

    & a {
      font-size: 15px;
    }
  }
}
</style>
