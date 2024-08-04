import React from "@vitejs/plugin-react";
import vue from "@vitejs/plugin-vue";
import path from "path";
import UnoCSS from "unocss/vite";
import { defineConfig, type UserConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@admin": path.resolve(__dirname, "./src/vue/modules/admin"),
    },
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("t-"),
        },
      },
    }),
    React({}),
    UnoCSS({
      transformCSS: "post",
      postcss: true,
    }),
  ],
  // ...
} satisfies UserConfig);
