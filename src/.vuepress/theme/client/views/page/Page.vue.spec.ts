import Page from './Page.vue';
import { shallowMount } from '@vue/test-utils';

describe('page', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(Page);

    expect(wrapper.element).toMatchInlineSnapshot();
  });
});
