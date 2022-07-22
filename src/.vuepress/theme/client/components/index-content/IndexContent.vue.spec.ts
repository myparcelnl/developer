import IndexContent from './IndexContent.vue';
import { shallowMount } from '@vue/test-utils';

describe('indexContent', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(IndexContent);

    expect(wrapper.element).toMatchInlineSnapshot();
  });
});
