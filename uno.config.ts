import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
} from "unocss";

export default defineConfig({
  shortcuts: [
    ["n-link", "op50 hover:(op100 text-primary) transition"],
    ["n-link-text", "n-link underline"],
    [
      "n-tab",
      "text-xl tracking-wide uppercase p3 border-b-2 border-transparent op20 transition",
    ],
    ["bg-base", "bg-gray/5"],
    ["font-base", "text-gray/200"],
    ["n-tab-active", "border-current op100"],
    ["border-base", "border-gray-400/20"],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: "DM Sans",
        serif: "DM Serif Display",
        mono: "DM Mono",
      },
    }),
  ],
});
