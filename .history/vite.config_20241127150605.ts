import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json" with { type: "json" }; // Node >=17

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), crx({ manifest }),{
    name: 'copy-manifest',
    apply: 'build',
    buildEnd() {
      const fs = require('fs');
      const path = require('path');
      const src = path.resolve(__dirname, 'manifest.json');
      const dest = path.resolve(__dirname, 'dist/manifest.json');
      fs.copyFileSync(src, dest);
    }
  }],
  build:{
    rollupOptions:{
      input:'./index.html'
    }
  }
});
