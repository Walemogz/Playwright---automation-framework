import { chromium, defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  timeout: 40 * 1000,
  expect: {
    timeout: 40 * 1000,
  },

  use: {

    browserName: 'chromium',
    baseURL: process.env.BASE_URL || 'https://www.saucedemo.com/',
    headless: true, // optional, can run headless in CI
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },



  reporter: 'html',




});
