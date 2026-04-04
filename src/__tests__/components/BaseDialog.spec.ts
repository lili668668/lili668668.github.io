import { describe, it, expect, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseDialog from '@/components/base/BaseDialog.vue'

describe('BaseDialog', () => {
  let wrapper: ReturnType<typeof mount>

  afterEach(() => {
    wrapper?.unmount()
  })

  it('open=false 時不顯示內容', () => {
    wrapper = mount(BaseDialog, {
      props: { open: false },
      attachTo: document.body,
    })
    expect(document.body.querySelector('[role="dialog"]')).toBeNull()
  })

  it('open=true 時顯示對話框', () => {
    wrapper = mount(BaseDialog, {
      props: { open: true },
      attachTo: document.body,
    })
    expect(document.body.querySelector('[role="dialog"]')).not.toBeNull()
  })

  it('顯示 title prop', () => {
    wrapper = mount(BaseDialog, {
      props: { open: true, title: '測試標題' },
      attachTo: document.body,
    })
    expect(document.body.textContent).toContain('測試標題')
  })

  it('沒有 title prop 時不顯示標題元素', () => {
    wrapper = mount(BaseDialog, {
      props: { open: true },
      attachTo: document.body,
    })
    const dialog = document.body.querySelector('[role="dialog"]')!
    expect(dialog.querySelector('p')).toBeNull()
  })

  it('點擊關閉按鈕時發出 close 事件', async () => {
    wrapper = mount(BaseDialog, {
      props: { open: true },
      attachTo: document.body,
    })
    const closeBtn = document.body.querySelector('button[aria-label="Close"]') as HTMLButtonElement
    closeBtn.click()
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('按 Escape 時發出 close 事件', async () => {
    wrapper = mount(BaseDialog, {
      props: { open: true },
      attachTo: document.body,
    })
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('open=false 時按 Escape 不發出 close 事件', async () => {
    wrapper = mount(BaseDialog, {
      props: { open: false },
      attachTo: document.body,
    })
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('close')).toBeFalsy()
  })

  it('渲染 slot 內容', () => {
    wrapper = mount(BaseDialog, {
      props: { open: true },
      slots: { default: '<p id="test-slot">slot 內容</p>' },
      attachTo: document.body,
    })
    expect(document.body.querySelector('#test-slot')?.textContent).toBe('slot 內容')
  })
})
