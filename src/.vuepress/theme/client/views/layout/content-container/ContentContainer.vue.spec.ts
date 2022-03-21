import { describe, expect, it } from 'vitest';
import ContentContainer from './ContentContainer.vue';
import { shallowMount } from '@vue/test-utils';

describe('contentContainer', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(ContentContainer);

    expect(wrapper.element).toMatchInlineSnapshot(`
      <div
        class="md:px-8 mx-auto px-5 w-full max-w-screen-xl"
      >
        
        
      </div>
    `);
  });
});
