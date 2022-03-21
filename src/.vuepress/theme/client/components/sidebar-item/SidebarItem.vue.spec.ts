import { describe, expect, it } from 'vitest';
import SidebarItem from './SidebarItem.vue';
import { shallowMount } from '@vue/test-utils';

describe('sidebarItem', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(SidebarItem);

    expect(wrapper.element).toMatchInlineSnapshot();
  });
});
