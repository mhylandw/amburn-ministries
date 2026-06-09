import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// The web build (Vercel) needs an absolute base ('/') so hashed assets resolve
// correctly on nested routes like /books/:slug and /blog/:slug — a relative
// base ('./') makes a direct load/refresh of those URLs request the JS from the
// wrong path and 404 into a blank page. The Capacitor mobile build loads from
// file:// and DOES need a relative base, so it sets CAP_BUILD=1 (npm run build:cap).
export default defineConfig({
  plugins: [react()],
  base: process.env.CAP_BUILD ? './' : '/',
})
