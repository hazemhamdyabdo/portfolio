import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("../pages/HomePage.vue") },
];

export const Router = createRouter({
  history: createWebHistory(),
  routes,
});
