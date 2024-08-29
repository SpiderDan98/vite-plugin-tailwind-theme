import { defineConfig } from "vite";
import { resolve } from "node:path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "VitePluginTailwindTheme",
      fileName: "vite-plugin-tailwind-theme",
    },
    rollupOptions: {
      external: [
        "tailwindcss/loadConfig.js",
        "tailwindcss/resolveConfig.js",
        "node:path",
        "node:fs",
        "node:url",
      ],
      output: {
        globals: {
          "tailwindcss/loadConfig.js": "loadConfig",
          "tailwindcss/resolveConfig.js": "resolveConfig",
          "node:path": "path",
          "node:fs": "fs",
          "node:url": "url",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "~": resolve(__dirname, "./"),
    },
  },
});
