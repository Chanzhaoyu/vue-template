import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import autoImport from "unplugin-auto-import/vite";
import autoImportComponents from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  define: {
    __VUE_OPTIONS_API__: false,
  },
  plugins: [
    vue(),
    vueJsx(),
    autoImport({
      imports: [
        "vue",
        "vue-router",
        {
          "naive-ui": [
            "useDialog",
            "useMessage",
            "useNotification",
            "useLoadingBar",
          ],
        },
      ],
      dts: "./types/auto-imports.d.ts",
      eslintrc: { enabled: true },
    }),
    autoImportComponents({
      dts: true,
      exclude: ["node_modules", "dist", "types", "src/components"],
      resolvers: [NaiveUiResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 5555,
    host: "0.0.0.0",
  },
});
