import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/moonie/' : '/', // Only add "/moonie/" in production
  plugins: [react()],
});
