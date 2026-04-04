import { test, expect } from '@playwright/test'

// Smoke test: verify the app loads and renders the root page
test('app loads and shows language selection', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('Select your language:')).toBeVisible()
})
