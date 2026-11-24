import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // In development, forward API calls to the local backend so the
    // frontend never needs a hardcoded address.
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})
