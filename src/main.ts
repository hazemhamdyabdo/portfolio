import { createApp } from "vue";
import "@unocss/reset/tailwind.css";
import "./index.css";
import "virtual:uno.css";
import App from "./App.vue";
import { Router } from "./router/index.ts";
import { createRouterScroller } from "vue-router-better-scroller";
import VNetworkGraph from "v-network-graph";
import "v-network-graph/lib/style.css";

const html = document.querySelector("html")!;
createApp(App)
  .use(Router)
  .use(VNetworkGraph)
  .use(
    createRouterScroller({
      selectors: {
        html(ctx) {
          // only do the sliding transition when the scroll position is not 0
          if (ctx.savedPosition?.top) html.classList.add("no-sliding");
          else html.classList.remove("no-sliding");
          // to go to the top of the page
          // return true;
        },
      },
      behavior: "smooth",
    })
  )
  .mount("#app");
