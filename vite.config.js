import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  base: '/portafolio-santos/', // 👈 Esto le dice a Vite que busque los archivos en tu repositorio
})
