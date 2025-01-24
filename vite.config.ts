import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 3000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'three', 'lottie-web'] // Make sure to use the correct package name here
        }
      }
    }
  },
  optimizeDeps: {
    include: ['three', 'lottie-web', 'react', 'react-dom']
  }
});
