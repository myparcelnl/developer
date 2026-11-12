import {shallowMount} from '@vue/test-utils';
import SidebarItem from './SidebarItem.vue';

describe('sidebarItem', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(SidebarItem, {
      props: {
        item: {
          text: 'Documentation',
          link: '/documentation/',
          children: [],
        },
      },
    });

    expect(wrapper.element).toMatchInlineSnapshot(`
      <li>
        <auto-link-stub
          class="py-1 flex transition-all duration-100 sidebar-item border-transparent"
          inheritcolor="false"
          item="[object Object]"
        />
        <!--v-if-->
      </li>
    `);
  });
});
