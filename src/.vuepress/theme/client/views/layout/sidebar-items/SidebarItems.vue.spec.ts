import { describe, expect, it } from 'vitest';
import SidebarItems from './SidebarItems.vue';
import { shallowMount } from '@vue/test-utils';

describe('sidebarItems', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(SidebarItems);

    expect(wrapper.element).toMatchInlineSnapshot();
  });
});
