import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import packageJSON from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: packageJSON.config.microDev.host as string,
    port: packageJSON.config.microDev.port as number,
    proxy: {
      '^/dev': {
        target: '',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev/, '')
      }
    }
  }
})
