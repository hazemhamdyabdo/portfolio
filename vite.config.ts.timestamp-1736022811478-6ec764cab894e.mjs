// vite.config.ts
import { defineConfig } from "file:///C:/Users/hazem/Desktop/new/portfolio/portfolio/node_modules/vite/dist/node/index.js";
import UnoCSS from "file:///C:/Users/hazem/Desktop/new/portfolio/portfolio/node_modules/unocss/dist/vite.mjs";
import Unimport from "file:///C:/Users/hazem/Desktop/new/portfolio/portfolio/node_modules/unimport/dist/unplugin.mjs";
import { fileURLToPath, URL } from "url";
import vue from "file:///C:/Users/hazem/Desktop/new/portfolio/portfolio/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/hazem/Desktop/new/portfolio/portfolio/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    Unimport.vite({
      addons: {
        vueTemplate: true
      },
      presets: ["vue"],
      dirs: ["./components/*"]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxoYXplbVxcXFxEZXNrdG9wXFxcXG5ld1xcXFxwb3J0Zm9saW9cXFxccG9ydGZvbGlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxoYXplbVxcXFxEZXNrdG9wXFxcXG5ld1xcXFxwb3J0Zm9saW9cXFxccG9ydGZvbGlvXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9oYXplbS9EZXNrdG9wL25ldy9wb3J0Zm9saW8vcG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBVbm9DU1MgZnJvbSBcInVub2Nzcy92aXRlXCI7XG5pbXBvcnQgVW5pbXBvcnQgZnJvbSBcInVuaW1wb3J0L3VucGx1Z2luXCI7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tIFwidXJsXCI7XG5cbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIFVub0NTUygpLFxuICAgIFVuaW1wb3J0LnZpdGUoe1xuICAgICAgYWRkb25zOiB7XG4gICAgICAgIHZ1ZVRlbXBsYXRlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHByZXNldHM6IFtcInZ1ZVwiXSxcbiAgICAgIGRpcnM6IFtcIi4vY29tcG9uZW50cy8qXCJdLFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL3NyY1wiLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBVLFNBQVMsb0JBQW9CO0FBQ3ZXLE9BQU8sWUFBWTtBQUNuQixPQUFPLGNBQWM7QUFDckIsU0FBUyxlQUFlLFdBQVc7QUFFbkMsT0FBTyxTQUFTO0FBTGlNLElBQU0sMkNBQTJDO0FBUWxRLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQVMsS0FBSztBQUFBLE1BQ1osUUFBUTtBQUFBLFFBQ04sYUFBYTtBQUFBLE1BQ2Y7QUFBQSxNQUNBLFNBQVMsQ0FBQyxLQUFLO0FBQUEsTUFDZixNQUFNLENBQUMsZ0JBQWdCO0FBQUEsSUFDekIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
