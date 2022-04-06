import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const name = 'finance'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg, name }
    })

    expect( wrapper.get('h1').text()).toMatch(`${msg} ${name}`)
  })
})
