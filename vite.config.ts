import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { copyFileSync, mkdirSync } from 'fs'

export default defineConfig({
  plugins: [react(), {
    name: 'copy-assets',
    writeBundle() {
      mkdirSync('dist/image', { recursive: true })
      copyFileSync('image/agnitian_removebg.png', 'dist/image/agnitian_removebg.png')
    }
  }],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
