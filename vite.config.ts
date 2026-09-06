import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import svgr from 'vite-plugin-svgr'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const spaFallback = (): Plugin => ({
  name: 'spa-fallback-404',
  closeBundle() {
    const indexPath = path.resolve(__dirname, 'dist/index.html')

    if (fs.existsSync(indexPath)) {
      fs.copyFileSync(indexPath, path.resolve(__dirname, 'dist/404.html'))
    }
  },
})

// https://vite.dev/config/
export default defineConfig({
  base: '/Rick-and-Morty/',
  plugins: [react(), svgr(), spaFallback()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
