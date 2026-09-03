import {shallowMount} from '@vue/test-utils';
import PageNav from './PageFooterNav.vue';

describe('pageNav', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(PageNav);

    expect(wrapper.element).toMatchInlineSnapshot();
  });
});
