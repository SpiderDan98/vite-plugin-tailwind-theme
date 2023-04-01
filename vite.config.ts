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
      external: ["tailwindcss/resolveConfig.js"],
      output: {
        globals: {
          "tailwindcss/resolveConfig.js": "resolveConfig",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
