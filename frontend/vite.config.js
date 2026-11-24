import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Keep fonts as separate files instead of inlining small ones as data:
    // URIs, so the site's Content-Security-Policy (font-src 'self') allows them.
    assetsInlineLimit: (file) => (file.endsWith('.woff2') ? false : undefined),
  },
  server: {
    // In development, forward API calls to the local backend so the
    // frontend never needs a hardcoded address.
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})
