import ContentContainer from './ContentContainer.vue';
import { shallowMount } from '@vue/test-utils';

describe('contentContainer', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(ContentContainer);

    expect(wrapper.element).toMatchInlineSnapshot();
  });
});
