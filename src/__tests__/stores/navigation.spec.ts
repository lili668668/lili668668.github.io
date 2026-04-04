import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useNavigationStore } from '@/stores/navigation'

describe('useNavigationStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('初始 backPath 為 null', () => {
    const store = useNavigationStore()
    expect(store.backPath).toBeNull()
  })

  it('setBackPath 可以設定路徑', () => {
    const store = useNavigationStore()
    store.setBackPath('/zh')
    expect(store.backPath).toBe('/zh')
  })

  it('setBackPath 可以設定為 null', () => {
    const store = useNavigationStore()
    store.setBackPath('/zh')
    store.setBackPath(null)
    expect(store.backPath).toBeNull()
  })

  it('多次呼叫 setBackPath 會更新值', () => {
    const store = useNavigationStore()
    store.setBackPath('/zh')
    store.setBackPath('/en')
    expect(store.backPath).toBe('/en')
  })
})
