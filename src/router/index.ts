import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";

const routes = [
  { path: "/", name: "home", component: () => import("../pages/Home.vue") },
  {
    path: "/blogs",
    name: "blogs",
    component: () => import("../pages/Blogs.vue"),
  },
  {
    path: "/blogs/:title",
    name: "content",
    component: () => import("../pages/BlogContent.vue"),
    props: true,
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../pages/Projects.vue"),
  },
  {
    path: "/demos",
    name: "demos",
    component: () => import("../pages/Demos.vue"),
  },
];

export const Router = createRouter({
  history: createWebHistory(),
  routes,
});

Router.beforeEach(() => {
  NProgress.start();
});
Router.afterEach(() => {
  NProgress.done();
});

/**
 *  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
 */
