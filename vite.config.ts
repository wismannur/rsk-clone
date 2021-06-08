import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import compress from 'vite-plugin-compress'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    brotliSize: true,
    rollupOptions: {
      external: ["asstes"]
    }
  },
  // plugins: [vue()],
  plugins: [vue(), compress({
    brotli: true,
    verbose: true,
  })],
})
