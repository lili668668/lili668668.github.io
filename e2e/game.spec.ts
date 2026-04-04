import { test, expect } from '@playwright/test'

test.describe('GameView', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/en/game')
    await expect(page.getByText('Bokoyaki', { exact: true })).toBeVisible()
  })

  test('shows first game title Bokoyaki', async ({ page }) => {
    await expect(page.getByText('Bokoyaki', { exact: true })).toBeVisible()
  })

  test('shows first game description', async ({ page }) => {
    await expect(page.getByText('A super simple Bokoyaki game made on a whim')).toBeVisible()
  })

  test('left nav button is disabled on first item', async ({ page }) => {
    const leftBtn = page.locator('button').nth(0)
    await expect(leftBtn).toBeDisabled()
  })

  test('right nav button is enabled on first item', async ({ page }) => {
    const rightBtn = page.locator('button').nth(1)
    await expect(rightBtn).toBeEnabled()
  })

  test('clicking right nav shows next game', async ({ page }) => {
    await page.locator('button').nth(1).click()
    await expect(page.getByText('Memo NodeJS')).toBeVisible()
  })

  test('clicking left nav after advancing goes back', async ({ page }) => {
    const rightBtn = page.locator('button').nth(1)
    const leftBtn = page.locator('button').nth(0)
    await rightBtn.click()
    await leftBtn.click()
    await expect(page.getByText('Bokoyaki', { exact: true })).toBeVisible()
  })

  test('right nav button is disabled on last item', async ({ page }) => {
    const rightBtn = page.locator('button').nth(1)
    // 6 items total, click 5 times to reach the last
    for (let i = 0; i < 5; i++) {
      await rightBtn.click()
    }
    await expect(rightBtn).toBeDisabled()
  })

  test('left nav button is enabled on last item', async ({ page }) => {
    const rightBtn = page.locator('button').nth(1)
    for (let i = 0; i < 5; i++) {
      await rightBtn.click()
    }
    await expect(page.locator('button').nth(0)).toBeEnabled()
  })

  test('ArrowRight key navigates to next game', async ({ page }) => {
    await page.keyboard.press('ArrowRight')
    await expect(page.getByText('Memo NodeJS')).toBeVisible()
  })

  test('ArrowLeft key navigates back after going forward', async ({ page }) => {
    await page.keyboard.press('ArrowRight')
    await page.keyboard.press('ArrowLeft')
    await expect(page.getByText('Bokoyaki', { exact: true })).toBeVisible()
  })

  test('keyboard navigation reaches all 6 items', async ({ page }) => {
    const expectedTitles = [
      'Bokoyaki', // exact match used below
      'Memo NodeJS',
      'Memo Rust',
      'Bot Fish',
      'Super Cube',
      'Parakeet Brothers Meme Generator',
    ]
    for (const title of expectedTitles) {
      await expect(page.getByText(title, { exact: true })).toBeVisible()
      await page.keyboard.press('ArrowRight')
    }
  })

  test('shows "Click to see ->" link option', async ({ page }) => {
    await expect(page.getByText('Click to see ->')).toBeVisible()
  })
})
