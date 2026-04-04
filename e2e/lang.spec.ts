import { test, expect } from '@playwright/test'

test.describe('LangView', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('shows language selection prompt', async ({ page }) => {
    await expect(page.getByText('Select your language:')).toBeVisible()
  })

  test('shows all 3 language options', async ({ page }) => {
    await expect(page.getByText('中文')).toBeVisible()
    await expect(page.getByText('English')).toBeVisible()
    await expect(page.getByText('日本語')).toBeVisible()
  })

  test('navigates to Chinese home on clicking 中文', async ({ page }) => {
    await page.getByText('中文').click()
    await expect(page).toHaveURL(/zh/)
  })

  test('navigates to English home on clicking English', async ({ page }) => {
    await page.getByText('English').click()
    await expect(page).toHaveURL(/en/)
  })

  test('navigates to Japanese home on clicking 日本語', async ({ page }) => {
    await page.getByText('日本語').click()
    await expect(page).toHaveURL(/ja/)
  })

  test('navigates to Chinese via keyboard shortcut 1', async ({ page }) => {
    await page.keyboard.press('1')
    await expect(page).toHaveURL(/#\/zh/)
  })

  test('navigates to English via keyboard shortcut 2', async ({ page }) => {
    await page.keyboard.press('2')
    await expect(page).toHaveURL(/#\/en/)
  })

  test('navigates to Japanese via keyboard shortcut 3', async ({ page }) => {
    await page.keyboard.press('3')
    await expect(page).toHaveURL(/#\/ja/)
  })

  test('navigates with ArrowDown then Enter', async ({ page }) => {
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
    await expect(page).toHaveURL(/#\/en/)
  })
})
