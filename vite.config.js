import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {readFileSync, writeFileSync} from 'node:fs'
import {resolve} from 'node:path'

function emit404ForGhPages() {
  return {
    name: 'emit-404-for-gh-pages',
    closeBundle() {
      try {
        const dist = resolve(process.cwd(), 'dist')
        const index = resolve(dist, 'index.html')
        const notFound = resolve(dist, '404.html')
        const html = readFileSync(index, 'utf8')
        writeFileSync(notFound, html)
      } catch (e) {
        console.warn('No se pudo crear 404.html:', e?.message)
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), emit404ForGhPages()],
  base: '/', // <<-- tu base en raíz
  resolve: {
    alias: {
      assets: resolve(__dirname, './src/assets'),
      styles: resolve(__dirname, './src/styles'),
      '@': resolve(__dirname, './src'),
    },
  },
})
