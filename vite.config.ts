import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// Determine base path: use repo name when building for production (e.g., GitHub Pages)
// This avoids broken imports when the site is served from https://<user>.github.io/<repo>/
const repoName = 'fantasy_hr';
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isProd ? './' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}); 