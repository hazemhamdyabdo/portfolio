import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import Unimport from "unimport/unplugin";
import { fileURLToPath, URL } from "url";
import svgLoader from 'vite-svg-loader'

import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    UnoCSS(),
    Unimport.vite({
      addons: {
        vueTemplate: true,
      },
      presets: ["vue"],
      dirs: ["./components/*"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
