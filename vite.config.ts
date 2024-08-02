import React from "@vitejs/plugin-react";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import { defineConfig, type UserConfig } from "vite";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("t-"),
        },
      },
    }),
    React(),
    UnoCSS({
      transformCSS: "post",
      postcss: true,
    }),
  ],
  // ...
} satisfies UserConfig);
