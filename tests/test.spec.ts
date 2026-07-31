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

test('terminal interface runs fake tests from the browser', async ({ page }) => {
  await page.goto('/')

  const terminal = page.locator('[data-testid="fake-terminal"]')
  await expect(terminal).toBeVisible()
  await expect(page.getByPlaceholder('Enter command')).toHaveValue('npm run test')

  await page.getByPlaceholder('Enter command').fill('npm run test')
  await page.getByRole('button', { name: /run/i }).click()

  await expect(page.getByText('All browser checks passed')).toBeVisible({ timeout: 5000 })
})
