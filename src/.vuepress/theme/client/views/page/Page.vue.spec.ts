import {shallowMount} from '@vue/test-utils';
import Page from './Page.vue';

describe('page', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(Page);

    expect(wrapper.element).toMatchInlineSnapshot(`
      <page-container-stub
        class="flex flex-col justify-between"
      />
    `);
  });
});
