import { defineConfig } from '@playwright/test';

const port = process.env.PORT ?? '3000';
const host = process.env.HOST ?? '127.0.0.1';
const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? `http://${host}:${port}`;

export default defineConfig({
  testDir: 'tests/accessibility',
  timeout: 30_000,
  expect: {
    timeout: 5_000
  },
  use: {
    baseURL,
    headless: true
  },
  webServer: {
    command: `node node_modules/next/dist/bin/next dev --hostname ${host} --port ${port}`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    stdout: 'pipe',
    stderr: 'pipe',
    env: {
      ...process.env,
      NODE_ENV: 'development'
    }
  }
});
