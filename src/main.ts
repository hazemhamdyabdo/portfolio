import { createApp } from "vue";
import "@unocss/reset/tailwind.css";
import "./index.css";
import "virtual:uno.css";
import App from "./App.vue";
import { Router } from "./router/index.ts";

createApp(App).use(Router).mount("#app");
