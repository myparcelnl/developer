import {shallowMount} from '@vue/test-utils';
import SidebarItems from './SidebarItems.vue';

describe('sidebarItems', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(SidebarItems);

    expect(wrapper.element).toMatchInlineSnapshot(`
      <ul>
        
        <sidebar-item-stub
          depth="0"
          item="[object Object]"
        />
        
      </ul>
    `);
  });
});
