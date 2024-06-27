import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './index.html',
    },
    outDir: 'dist',
  },
  publicDir: 'public', // Ensure Vite knows about the public directory
});
