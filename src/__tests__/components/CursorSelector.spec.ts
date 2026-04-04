import { describe, it, expect, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import CursorSelector from '@/components/base/CursorSelector.vue'

const items = [
  { label: '選項一', key: '1' },
  { label: '選項二', key: '2' },
  { label: '選項三', key: '3' },
]

describe('CursorSelector', () => {
  let wrapper: ReturnType<typeof mount>

  afterEach(() => {
    wrapper?.unmount()
  })

  it('渲染所有選項', () => {
    wrapper = mount(CursorSelector, {
      props: { items, modelValue: 0 },
    })
    expect(wrapper.text()).toContain('選項一')
    expect(wrapper.text()).toContain('選項二')
    expect(wrapper.text()).toContain('選項三')
  })

  it('顯示當前選項的游標符號 >', () => {
    wrapper = mount(CursorSelector, {
      props: { items, modelValue: 1 },
    })
    expect(wrapper.text()).toContain('>')
  })

  it('顯示 key 標籤', () => {
    wrapper = mount(CursorSelector, {
      props: { items, modelValue: 0 },
    })
    expect(wrapper.text()).toContain('[1]')
    expect(wrapper.text()).toContain('[2]')
    expect(wrapper.text()).toContain('[3]')
  })

  it('滑鼠移入發出 update:modelValue', async () => {
    wrapper = mount(CursorSelector, {
      props: { items, modelValue: 0 },
    })
    // findAll('div') 回傳 [rootDiv, option0, option1, option2]
    // 觸發第二個選項（v-for index 1）的 mouseenter
    const optionDivs = wrapper.findAll('div')
    await optionDivs[2].trigger('mouseenter')
    const emitted = wrapper.emitted('update:modelValue')
    expect(emitted).toBeTruthy()
    expect(emitted![emitted!.length - 1]).toEqual([1])
  })

  it('點擊選項發出 confirm 事件', async () => {
    wrapper = mount(CursorSelector, {
      props: { items, modelValue: 0 },
    })
    // findAll('div')[1] 為第一個選項（v-for index 0）
    const optionDivs = wrapper.findAll('div')
    await optionDivs[1].trigger('click')
    expect(wrapper.emitted('confirm')).toBeTruthy()
    expect(wrapper.emitted('confirm')![0]).toEqual([0])
  })

  it('ArrowDown 鍵發出下一個索引', async () => {
    wrapper = mount(CursorSelector, {
      props: { items, modelValue: 0 },
    })
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }))
    const emitted = wrapper.emitted('update:modelValue')
    expect(emitted).toBeTruthy()
    expect(emitted![emitted!.length - 1]).toEqual([1])
  })

  it('ArrowUp 鍵發出上一個索引（循環）', async () => {
    wrapper = mount(CursorSelector, {
      props: { items, modelValue: 0 },
    })
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }))
    const emitted = wrapper.emitted('update:modelValue')
    expect(emitted).toBeTruthy()
    expect(emitted![emitted!.length - 1]).toEqual([2]) // (0-1+3) % 3 = 2
  })

  it('s 鍵等同 ArrowDown', async () => {
    wrapper = mount(CursorSelector, {
      props: { items, modelValue: 1 },
    })
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 's' }))
    const emitted = wrapper.emitted('update:modelValue')
    expect(emitted).toBeTruthy()
    expect(emitted![emitted!.length - 1]).toEqual([2])
  })

  it('w 鍵等同 ArrowUp', async () => {
    wrapper = mount(CursorSelector, {
      props: { items, modelValue: 2 },
    })
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'w' }))
    const emitted = wrapper.emitted('update:modelValue')
    expect(emitted).toBeTruthy()
    expect(emitted![emitted!.length - 1]).toEqual([1])
  })

  it('Enter 鍵發出 confirm 事件', async () => {
    wrapper = mount(CursorSelector, {
      props: { items, modelValue: 1 },
    })
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }))
    const emitted = wrapper.emitted('confirm')
    expect(emitted).toBeTruthy()
    expect(emitted![emitted!.length - 1]).toEqual([1])
  })

  it('數字鍵 1 跳到第一個選項並確認', async () => {
    wrapper = mount(CursorSelector, {
      props: { items, modelValue: 2 },
    })
    window.dispatchEvent(new KeyboardEvent('keydown', { key: '1' }))
    const updateEmitted = wrapper.emitted('update:modelValue')
    const confirmEmitted = wrapper.emitted('confirm')
    expect(updateEmitted).toBeTruthy()
    expect(updateEmitted![updateEmitted!.length - 1]).toEqual([0])
    expect(confirmEmitted).toBeTruthy()
    expect(confirmEmitted![confirmEmitted!.length - 1]).toEqual([0])
  })

  it('數字鍵超出範圍不觸發事件', async () => {
    wrapper = mount(CursorSelector, {
      props: { items, modelValue: 0 },
    })
    window.dispatchEvent(new KeyboardEvent('keydown', { key: '9' }))
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
    expect(wrapper.emitted('confirm')).toBeFalsy()
  })

  it('unmount 後移除鍵盤監聽', async () => {
    wrapper = mount(CursorSelector, {
      props: { items, modelValue: 0 },
    })
    wrapper.unmount()
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }))
    // unmount 後 emitted 不再更新
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })
})
