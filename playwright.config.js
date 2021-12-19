// playwright.config.js
// @ts-check
const { devices } = require('@playwright/test');
/** @type {import('@playwright/test').PlaywrightTestConfig} */

const config = {
    use: {
      //baseURL: 'https://stephenherrick.dev'
    },
    webServer: {
        command: 'npm run serve',
        port: 8080,
        timeout: 120 * 1000,
        reuseExistingServer: !process.env.CI,
      },
    projects: [
            {
                name: 'chromium',
                use: { ...devices['Desktop Chrome'] },
            },
            {
                name: 'firefox',
                use: { ...devices['Desktop Firefox'] },
            }
        ],  
  };
  module.exports = config;