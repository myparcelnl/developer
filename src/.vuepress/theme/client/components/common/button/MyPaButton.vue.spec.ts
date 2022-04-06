import MyPaButton from './MyPaButton.vue';
import { shallowMount } from '@vue/test-utils';

describe('button', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(MyPaButton, { slots: { default: 'click me' } });

    expect(wrapper.element).toMatchInlineSnapshot(`
<div
  aria-disabled="false"
  class="border-0 duration-200 font-display inline-flex no-underline rounded-full transition-colors whitespace-nowrap hover:bg-goldfish-600 bg-goldfish-500 text-white py-3 px-5 cursor-pointer"
  role="button"
  tabindex="0"
>
  <!--v-if-->
  <span
    class="my-auto"
  >
    
    
  </span>
  <!--v-if-->
</div>
`);
  });
});
