import { shallowMount } from '@vue/test-utils'
import info from './components/info'

describe('info.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(info)
    expect(wrapper.exists()).toBeTruthy()
  })
})
