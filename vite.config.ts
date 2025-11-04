/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => ({
  plugins: [react()],
  base: "/module_3_week_1/",
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
}));
