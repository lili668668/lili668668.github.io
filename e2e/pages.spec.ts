import { test, expect } from '@playwright/test'

test.describe('AboutView', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 })
    await page.goto('/#/en/about')
  })

  test('shows page title', async ({ page }) => {
    await expect(page.getByText('Character Introduction')).toBeVisible()
  })

  test('shows character name', async ({ page }) => {
    await expect(page.getByText('Name: Tzu-Yin Hong')).toBeVisible()
  })

  test('shows nickname', async ({ page }) => {
    await expect(page.getByText('Nickname: Ballfish')).toBeVisible()
  })
})

test.describe('AboutView (mobile)', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 499, height: 800 })
    await page.goto('/#/en/about')
  })

  test('shows tip to click white dots', async ({ page }) => {
    await expect(page.getByText('Please click the white dots')).toBeVisible()
  })
})

test.describe('SkillView', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 800, height: 800 })
    await page.goto('/#/en/skill')
  })

  test('shows page title', async ({ page }) => {
    await expect(page.getByText('Skill Tree').first()).toBeVisible()
  })

  test('shows skill categories', async ({ page }) => {
    // getByText matches both the tree view span and SVG text element; use .first() to avoid strict mode violation
    await expect(page.getByText('Web Frontend').first()).toBeVisible()
    await expect(page.getByText('Web Backend').first()).toBeVisible()
    await expect(page.getByText('Data Storage').first()).toBeVisible()
  })

  test('shows terminal-style tree commands', async ({ page }) => {
    await expect(page.getByText('$ cd /skills')).toBeVisible()
    await expect(page.getByText('$ tree')).toBeVisible()
  })

  test('shows skill items', async ({ page }) => {
    // Same tree view / SVG duplicate issue; use .first()
    await expect(page.getByText('Vue').first()).toBeVisible()
    await expect(page.getByText('React').first()).toBeVisible()
    await expect(page.getByText('MySQL').first()).toBeVisible()
  })
})

test.describe('ExperienceView', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 })
    await page.goto('/#/en/experience')
  })

  test('shows page title', async ({ page }) => {
    await expect(page.getByText('Adventures')).toBeVisible()
  })

  test('shows experience sections', async ({ page }) => {
    await expect(page.getByText('University Years')).toBeVisible()
    // 'Wavenet Technology' also appears in the university description text; use exact match
    await expect(page.getByText('Wavenet Technology', { exact: true })).toBeVisible()
    // 'Universetech International' also appears in its own description text; use exact match
    await expect(page.getByText('Universetech International', { exact: true })).toBeVisible()
  })
})

test.describe('HistoryView', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/en/history')
  })

  test('shows page title', async ({ page }) => {
    await expect(page.getByText('Time Machine')).toBeVisible()
  })

  test('shows previous website years', async ({ page }) => {
    await expect(page.getByText('2020')).toBeVisible()
    await expect(page.getByText('2017')).toBeVisible()
  })
})

test.describe('App Navigation', () => {
  test('home link is visible on HomeView', async ({ page }) => {
    await page.goto('/#/en/')
    // The home button is always present in App.vue nav
    const links = page.locator('a')
    await expect(links.first()).toBeVisible()
  })

  test('clicking home link from sub-page returns to lang selection', async ({ page }) => {
    await page.goto('/#/en/about')
    // The home button is always the first <a> in the nav
    const homeLink = page.locator('a').first()
    await homeLink.click()
    await expect(page.getByText('Select your language:')).toBeVisible()
  })

  test('LangView has no back button', async ({ page }) => {
    await page.goto('/')
    // On LangView, backPath is null so only the home button should be present
    const links = page.locator('a')
    await expect(links).toHaveCount(1)
  })

  test('HomeView has back button pointing to LangView', async ({ page }) => {
    await page.goto('/#/en/')
    // HomeView has 7 links total: 1 home + 1 back (to lang selection) + 5 menu RouterLinks
    const links = page.locator('a')
    await expect(links).toHaveCount(7)
  })

  test('sub-pages have back button pointing to HomeView', async ({ page }) => {
    await page.goto('/#/en/about')
    // backPath = '/en/' on sub-pages, so 2 links (home + back)
    const links = page.locator('a')
    await expect(links).toHaveCount(2)
  })

  test('navigating to different languages shows translated content', async ({ page }) => {
    await page.goto('/#/zh/')
    await expect(page.getByText('歡迎來到球魚的小魚缸')).toBeVisible()
  })
})
