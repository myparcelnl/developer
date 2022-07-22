import PageNav from './PageFooterNav.vue';
import { shallowMount } from '@vue/test-utils';

describe('pageNav', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(PageNav);

    expect(wrapper.element).toMatchInlineSnapshot();
  });
});
