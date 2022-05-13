import { describe, expect, it } from 'vitest';
import HomePartnerBrand from './HomePartnerBrand.vue';
import { shallowMount } from '@vue/test-utils';

describe('homePartnerBrand', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(HomePartnerBrand);

    expect(wrapper.element).toMatchInlineSnapshot(`
      <cta-stub
        buttonvariant="outline"
        class="before:content before:pb-[100%]"
        style="background-color: null;"
      />
    `);
  });
});
