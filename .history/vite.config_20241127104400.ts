import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./src/plugin/manifest.json";

// https://vite.dev/config/
export default defineConfig({
  root: "src",
  plugins: [vue(), crx({ manifest })],
});
