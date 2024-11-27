import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json" with { type: "json" }; // Node >=17

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), crx({ manifest })],
  build:{
    rollupOptions:{
      input:{
        main:"./index.html",
        manifest:"./manifest.json"
      },
      output:{
        entryFileNames:"[name].js",
        chunkFileNames:"[name].js",
        assetFileNames:"[name].[ext]"
      }
    }
  }
});
