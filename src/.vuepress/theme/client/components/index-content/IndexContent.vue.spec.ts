import {shallowMount} from '@vue/test-utils';
import IndexContent from './IndexContent.vue';

describe('indexContent', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(IndexContent);

    expect(wrapper.element).toMatchInlineSnapshot();
  });
});
