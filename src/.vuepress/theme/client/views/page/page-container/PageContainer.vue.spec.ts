import PageContainer from './PageContainer.vue';
import { shallowMount } from '@vue/test-utils';

describe('pageContainer', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(PageContainer);

    expect(wrapper.element).toMatchInlineSnapshot();
  });
});
