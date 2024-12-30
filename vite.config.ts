import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    strictPort: true, // Necesario para Tauri
  },
  clearScreen: false,
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
