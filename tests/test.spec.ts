import { test, expect } from '@playwright/test'

test('page loads successfully', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toBeVisible()
  await expect(page.locator('h1')).toContainText('Stephen Herrick')
})

test('social links are rendered', async ({ page }) => {
  await page.goto('/')
  const links = page.locator('a[target="_blank"]')
  await expect(links).toHaveCount(4)
})

test('footer contains current year', async ({ page }) => {
  await page.goto('/')
  const currentYear = new Date().getFullYear()
  await expect(page.locator('footer')).toContainText(currentYear.toString())
})
