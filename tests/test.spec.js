const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page, baseURL }) => {
    // Go to the starting url before each test.
    await page.goto(baseURL);
  });

test('title is present', async ({ page }) => {
  const title = await page.title();
  await expect(title).toBe('My Portfolio');
});

test('links exist',async ({ page }) => {
    const icons = await page.locator('id=label');
    await expect(icons).toHaveText([
        'Resume',
        'EMail',
        'LinkedIn',
        'GitHub'
    ]);
})