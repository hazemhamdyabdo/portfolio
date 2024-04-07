const shortCuts = (title: string) =>
  title
    .split(" ")
    .map((e: string) => e[0])
    .join("");

const blogs = [
  {
    title: "Vue 3 Reactivity System Is Brilliant!",
    route:"vue-3-reactivity-system-is-brilliant",
    date: "1 Apr",
    duration: 15,
  },
  {
    title: "SOLID Principles Design Patterns and Functional Programming",
    route:"solid-principles-design-patterns-and-functional-programming",
    date: "8 Feb",
    duration: 18,
  },
  {
    title: "Nuxt VS Vue",
    date: "4 Jun",
    duration: 12,
  },
  
];

const PreBlogs = [
  {
    title: "Last Version Of Vue",
    date: "30 Dec",
    duration: 7,
  },
  {
    title: "Composition API in Vue",
    date: "11 Nov",
    duration: 5,
  },
  {
    title: "Composable VS Mixins",
    date: "20 Oct",
    duration: 13,
  },
  {
    title: "Common Vue Mistakes",
    date: "28 Sep",
    duration: 10,
  },
  {
    title: "Vue 3 Migration Notes",
    date: "15 Aug",
    duration: 5,
  },
];

blogs.forEach((e: { title: string }) => {
  // @ts-ignore
  e.subTitle = shortCuts(e.title);
});

export { blogs, PreBlogs };
