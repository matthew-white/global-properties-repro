import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import HelloWorldOptions from '../HelloWorldOptions.vue'
import HelloWorldComposition from '../HelloWorldComposition.vue'
import HelloWorldOptionsSetup from '../HelloWorldOptionsSetup.vue'
import HelloWorldOptionsSetupWithoutReturn from '../HelloWorldOptionsSetupWithoutReturn.vue'
import foo from '../../plugins/foo'

describe('HelloWorld', () => {
  it('provides access to a global property from an Options API component', () => {
    const wrapper = mount(HelloWorldOptions, {
      global: { plugins: [foo] }
    })
    expect(wrapper.vm.foo).toBeDefined()
  })

  it('provides access to a global property from a Composition API component', () => {
    const wrapper = mount(HelloWorldComposition, {
      global: { plugins: [foo] }
    })
    expect(wrapper.vm.foo).toBeDefined()
  })

  it('provides access to a global property from an Options API component with a setup() function', () => {
    const wrapper = mount(HelloWorldOptionsSetup, {
      global: { plugins: [foo] }
    })
    expect(wrapper.vm.foo).toBeDefined()
  })

  it('provides access to a global property from an Options API component with a setup() function that does not return', () => {
    const wrapper = mount(HelloWorldOptionsSetupWithoutReturn, {
      global: { plugins: [foo] }
    })
    expect(wrapper.vm.foo).toBeDefined()
  })
})
