import { describe, expect, it } from 'vitest';
import ContentBlock from './ContentBlock.vue';
import { shallowMount } from '@vue/test-utils';

describe('contentBlock', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(ContentBlock);

    expect(wrapper.element).toMatchInlineSnapshot(`
      <div
        class=""
      >
        
        
      </div>
    `);
  });
});
