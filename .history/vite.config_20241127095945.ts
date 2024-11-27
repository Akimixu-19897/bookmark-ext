import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    host:'0.0.0.0',
    open:true,
    port:9527,
  },
  build: {
    rollupOptions: {
      input: {
        option: resolve(__dirname, "option.html"),
        popup: resolve(__dirname, "popup.html"),
        override: resolve(__dirname, "override.html"),
      },
    },
  },
})
