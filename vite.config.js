import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  assetsInclude: ['**/*.apk'],
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
})