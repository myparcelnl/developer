import {shallowMount} from '@vue/test-utils';
import PageFooter from './PageFooter.vue';

describe('pageFooter', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(PageFooter);

    expect(wrapper.element).toMatchInlineSnapshot();
  });
});
