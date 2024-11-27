import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./src/plugin/manifest.json";

// https://vite.dev/config/
export default defineConfig({
  root: "src",
  plugins: [vue(), crx({ manifest })],
  server: {
    host: "0.0.0.0",
    open: true,
    port: 9527,
    hmr: {
      protocol: "ws", // 使用 WebSocket 协议
      host: "localhost", // 主机名
    },
  },
  build: {
    outDir: "../dist", // 打包输出目录
    rollupOptions: {
      input: {
        option: resolve(__dirname, "src/option/index.html"),
        popup: resolve(__dirname, "src/popup/index.html"),
        override: resolve(__dirname, "src/override/index.html"),
      },
    },
  },
});
