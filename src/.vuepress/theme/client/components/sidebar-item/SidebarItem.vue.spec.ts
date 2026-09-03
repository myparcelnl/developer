import {shallowMount} from '@vue/test-utils';
import SidebarItem from './SidebarItem.vue';

describe('sidebarItem', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(SidebarItem);

    expect(wrapper.element).toMatchInlineSnapshot();
  });
});
