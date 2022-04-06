import ToggleSidebarButton from './ToggleSidebarButton.vue';
import { shallowMount } from '@vue/test-utils';

describe('toggleSidebarButton', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(ToggleSidebarButton);

    expect(wrapper.element).toMatchInlineSnapshot();
  });
});
