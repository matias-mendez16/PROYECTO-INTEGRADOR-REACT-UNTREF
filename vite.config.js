import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://matias-mendez16.github.io/PROYECTO-INTEGRADOR-REACT-UNTREF/'
})
