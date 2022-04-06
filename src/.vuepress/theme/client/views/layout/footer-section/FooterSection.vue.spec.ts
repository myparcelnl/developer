import FooterSection from './FooterSection.vue';
import { shallowMount } from '@vue/test-utils';

describe('footerSection', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(FooterSection);

    expect(wrapper.element).toMatchInlineSnapshot();
  });
});
