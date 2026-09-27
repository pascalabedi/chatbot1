import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/message': {
        target: 'https://ai.mapsante.cd',
        changeOrigin: true,
        rewrite: () => '/message',
        secure: true,
      },
    },
  },
})
