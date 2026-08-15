const shortCuts = (title: string) =>
  title
    .split(" ")
    .map((e: string) => e[0])
    .join("");

export type BlogMeta = {
  title: string;
  route: string;
  date: string;
  duration: number;
  subTitle?: string;
};

const blogs2025: BlogMeta[] = [
  {
    title:
      "How to Write Efficient Reusable UI Component Packages with React",
    route: "how-to-write-efficient-reusable-ui-component-packages-with-react",
    date: "10 Jun",
    duration: 15,
  },
  {
    title: "Building Reusable Map Components with MapLibre and Vue",
    route: "building-reusable-map-components-with-maplibre-and-vue",
    date: "12 Mar",
    duration: 14,
  },
  {
    title: "AI Assisted Frontend Workflows That Actually Ship",
    route: "ai-assisted-frontend-workflows-that-actually-ship",
    date: "28 Jan",
    duration: 11,
  },
  {
    title: "Real Time Dashboards with Vue and WebSockets",
    route: "real-time-dashboards-with-vue-and-websockets",
    date: "18 Feb",
    duration: 13,
  },
  {
    title: "Vue Versus React in 2025 What Still Matters",
    route: "vue-versus-react-in-2025-what-still-matters",
    date: "5 Apr",
    duration: 12,
  },
  {
    title: "Frontend Architecture for Large Scale Migrations",
    route: "frontend-architecture-for-large-scale-migrations",
    date: "22 May",
    duration: 16,
  },
];

const blogs: BlogMeta[] = [
  {
    title: "Is Vue 3's Reactivity System Truly Remarkable? Let's Find Out!",
    route: "vue-3-reactivity-system-is-brilliant",
    date: "1 Apr",
    duration: 15,
  },
  {
    title: "SOLID Principles Design Patterns and Functional Programming",
    route: "solid-principles-design-patterns-and-functional-programming",
    date: "8 Feb",
    duration: 18,
  },
  {
    title: "Nuxt VS Vue",
    route: "nuxt-vs-vue",
    date: "4 Jun",
    duration: 12,
  },
  {
    title: "Pinia Patterns for Scalable State",
    route: "pinia-patterns-for-scalable-state",
    date: "19 Aug",
    duration: 10,
  },
  {
    title: "Vite Beyond the Basics Performance Tips",
    route: "vite-beyond-the-basics-performance-tips",
    date: "3 Oct",
    duration: 9,
  },
];

const PreBlogs: BlogMeta[] = [
  {
    title: "Last Version Of Vue",
    route: "last-version-of-vue",
    date: "30 Dec",
    duration: 7,
  },
  {
    title: "Composition API in Vue",
    route: "composition-api-in-vue",
    date: "11 Nov",
    duration: 5,
  },
  {
    title: "Composable VS Mixins",
    route: "composable-vs-mixins",
    date: "20 Oct",
    duration: 13,
  },
  {
    title: "Common Vue Mistakes",
    route: "common-vue-mistakes",
    date: "28 Sep",
    duration: 10,
  },
  {
    title: "Vue 3 Migration Notes",
    route: "vue-3-migration-notes",
    date: "15 Aug",
    duration: 5,
  },
];

[...blogs2025, ...blogs, ...PreBlogs].forEach((e) => {
  e.subTitle = shortCuts(e.title);
});

export { blogs, PreBlogs, blogs2025 };
