import PageMeta from './PageMeta.vue';
import { shallowMount } from '@vue/test-utils';

describe('pageMeta', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(PageMeta);

    expect(wrapper.element).toMatchInlineSnapshot();
  });
});
