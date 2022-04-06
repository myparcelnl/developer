import PageContributors from './PageContributors.vue';
import { shallowMount } from '@vue/test-utils';

describe('pageContributors', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(PageContributors);

    expect(wrapper.element).toMatchInlineSnapshot();
  });
});
