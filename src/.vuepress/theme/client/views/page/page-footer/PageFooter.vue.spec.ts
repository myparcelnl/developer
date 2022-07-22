import PageFooter from './PageFooter.vue';
import { shallowMount } from '@vue/test-utils';

describe('pageFooter', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(PageFooter);

    expect(wrapper.element).toMatchInlineSnapshot();
  });
});
