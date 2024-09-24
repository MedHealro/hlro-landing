import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import ContactUs from '../MainFooter.vue'

describe('MainFooter', () => {
  it('renders properly', () => {
    const wrapper = mount(ContactUs) // 不傳遞任何 props
    expect(wrapper.text()).toContain('© 2023-2024 資慧科技股份有限公司') // 測試渲染的預期文本
  })
})