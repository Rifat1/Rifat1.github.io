// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  base: "https://rifat1.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
