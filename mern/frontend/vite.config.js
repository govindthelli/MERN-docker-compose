import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,   // <--- change this to your desired port
    host: true,   // <--- required for EC2 public access
  },
})
