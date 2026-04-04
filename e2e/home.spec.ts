import { test, expect } from '@playwright/test'

test.describe('HomeView', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 })
    await page.goto('/#/en/')
    await expect(page.getByText('Character Introduction')).toBeVisible()
  })

  test('shows title and subtitle', async ({ page }) => {
    await expect(page.getByText("Welcome to Ballfish's Little Fish Tank")).toBeVisible()
    await expect(page.getByText("Let's explore what's in this fish tank")).toBeVisible()
  })

  test('shows 5 menu items with key shortcuts', async ({ page }) => {
    await expect(page.getByText('[1]')).toBeVisible()
    await expect(page.getByText('[2]')).toBeVisible()
    await expect(page.getByText('[3]')).toBeVisible()
    await expect(page.getByText('[4]')).toBeVisible()
    await expect(page.getByText('[5]')).toBeVisible()
    await expect(page.getByText('Character Introduction')).toBeVisible()
    await expect(page.getByText('Skill Tree')).toBeVisible()
    await expect(page.getByText('Adventures')).toBeVisible()
    await expect(page.getByText('Games')).toBeVisible()
    await expect(page.getByText('Time Machine')).toBeVisible()
  })

  test('cursor starts on first item', async ({ page }) => {
    // The cursor '>' should be next to the first item
    const firstItem = page.getByText('Character Introduction')
    const option = firstItem.locator('..')
    await expect(option).toContainText('>')
  })

  test('ArrowDown moves cursor to next item', async ({ page }) => {
    await page.keyboard.press('ArrowDown')
    const secondItem = page.getByText('Skill Tree')
    const option = secondItem.locator('..')
    await expect(option).toContainText('>')
  })

  test('ArrowUp wraps around to last item', async ({ page }) => {
    await page.keyboard.press('ArrowUp')
    const lastItem = page.getByText('Time Machine')
    const option = lastItem.locator('..')
    await expect(option).toContainText('>')
  })

  test('pressing 1 navigates to About page', async ({ page }) => {
    await page.keyboard.press('1')
    await expect(page).toHaveURL(/#\/en\/about/)
  })

  test('pressing 2 navigates to Skill page', async ({ page }) => {
    await page.keyboard.press('2')
    await expect(page).toHaveURL(/#\/en\/skill/)
  })

  test('pressing 3 navigates to Experience page', async ({ page }) => {
    await page.keyboard.press('3')
    await expect(page).toHaveURL(/#\/en\/experience/)
  })

  test('pressing 4 navigates to Game page', async ({ page }) => {
    await page.keyboard.press('4')
    await expect(page).toHaveURL(/#\/en\/game/)
  })

  test('pressing 5 navigates to History page', async ({ page }) => {
    await page.keyboard.press('5')
    await expect(page).toHaveURL(/#\/en\/history/)
  })

  test('Enter navigates to selected item', async ({ page }) => {
    await page.keyboard.press('Enter')
    await expect(page).toHaveURL(/#\/en\/about/)
  })

  test('clicking a menu item navigates to its page', async ({ page }) => {
    await page.getByText('Skill Tree').click()
    await expect(page).toHaveURL(/#\/en\/skill/)
  })

  test('shows back button linking to language selection', async ({ page }) => {
    // In hash router mode, RouterLink to="/" renders as href="/#/"
    // Both home and back button at HomeView point to "/" (lang selection)
    // The back button is the second <a> in the nav
    const backLink = page.locator('a').nth(1)
    await expect(backLink).toBeVisible()
  })
})
