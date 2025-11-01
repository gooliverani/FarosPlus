import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    include: ['tests/unit/**/*.test.ts?(x)'],
    css: {
      modules: {
        classNameStrategy: 'non-scoped'
      }
    },
    env: {
      NODE_ENV: 'test'
    },
    exclude: ['tests/accessibility/**'],
    coverage: {
      reporter: ['text', 'lcov'],
      reportsDirectory: './coverage/unit'
    }
  }
});
