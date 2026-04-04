import { describe, it, expect, vi } from 'vitest'
import { useLangRoute } from '@/composables/useLangRoute'

vi.mock('vue-router', () => ({
  useRoute: () => ({
    params: { lang: 'zh' },
  }),
}))

describe('useLangRoute', () => {
  it('回傳目前語言', () => {
    const { lang } = useLangRoute()
    expect(lang).toBe('zh')
  })

  it('getPath 組合正確路徑', () => {
    const { getPath } = useLangRoute()
    expect(getPath('about')).toBe('/zh/about')
  })

  it('getPath 支援不同子路徑', () => {
    const { getPath } = useLangRoute()
    expect(getPath('skill')).toBe('/zh/skill')
    expect(getPath('game')).toBe('/zh/game')
  })
})
