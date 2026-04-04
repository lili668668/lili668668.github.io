import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Lang } from '@/constants/Lang'

// Mock vue-i18n
const mockSetLocaleMessage = vi.fn()
const mockLocale = { value: Lang.ZH }

vi.mock('vue-i18n', () => ({
  createI18n: () => ({
    global: {
      setLocaleMessage: mockSetLocaleMessage,
      locale: mockLocale,
    },
  }),
}))

// Mock locales
vi.mock('@/locales/zh.json', () => ({ default: { title: '中文' } }))
vi.mock('@/locales/en.json', () => ({ default: { title: 'English' } }))
vi.mock('@/locales/ja.json', () => ({ default: { title: '日本語' } }))

describe('setLocale', () => {
  beforeEach(() => {
    vi.resetModules()
    mockSetLocaleMessage.mockClear()
    mockLocale.value = Lang.ZH
  })

  it('設定語言為 EN 後 locale 變更', async () => {
    const { setLocale } = await import('@/i18n')
    await setLocale(Lang.EN)
    expect(mockLocale.value).toBe(Lang.EN)
  })

  it('載入語言包後呼叫 setLocaleMessage', async () => {
    const { setLocale } = await import('@/i18n')
    await setLocale(Lang.EN)
    expect(mockSetLocaleMessage).toHaveBeenCalledWith(Lang.EN, { title: 'English' })
  })

  it('同一語言不重複載入', async () => {
    const { setLocale } = await import('@/i18n')
    await setLocale(Lang.EN)
    await setLocale(Lang.EN)
    expect(mockSetLocaleMessage).toHaveBeenCalledTimes(1)
  })
})
