import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
export default defineConfig({
  base: '/aisystem/', // Must MATCH the repo name exactly!
  plugins: [react()],
});

