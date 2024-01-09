import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import Unimport from "unimport/unplugin";

import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    Unimport.vite({
      addons: {
        vueTemplate: true,
      },
      presets: ["vue"],
      dirs: ["./components/*"],
    }),
  ],
});
