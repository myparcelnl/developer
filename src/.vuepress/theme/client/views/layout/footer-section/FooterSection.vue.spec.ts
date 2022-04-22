import { describe, expect, it } from 'vitest';

import FooterSection from './FooterSection.vue';
import { shallowMount } from '@vue/test-utils';

describe('footerSection', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(FooterSection);

    expect(wrapper.element).toMatchInlineSnapshot(`
      <content-block-stub
        class="dark:text-zinc-400 text-sm text-zinc-600"
        tag="div"
        variant=",border-top"
      />
    `);
  });
});
