import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json" with { type: "json" }; // Node >=17

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), crx({ manifest })],
  server: {
    open: true,
    port: 9527,
  },
  build:{
    rollupOptions:{
      input:"./index.html",
    }
  }
});
