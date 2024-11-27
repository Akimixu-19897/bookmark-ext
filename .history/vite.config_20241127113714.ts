import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json" assert { type: "json" }; // Node >=17
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: "src/",
  plugins: [
    vue(),
    crx({ manifest }),
    copy({
      targets: [
        { src: "manifest.json", dest: "dist" }, // 复制 manifest.json 到 dist 目录
      ],
    }),
  ],
  build: {
    outDir: path.resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        contentPage: path.resolve(__dirname, "src/contentPage/index.html"),
        popup: path.resolve(__dirname, "src/popup/index.html"),
      },
      output: {
        assetFileNames: "assets/[name]-[hash].[ext]", // 静态资源
        chunkFileNames: "js/[name]-[hash].js", // 代码分割中产生的 chunk
        entryFileNames: "js/[name]-[hash].js",
      },
    },
  },
});
