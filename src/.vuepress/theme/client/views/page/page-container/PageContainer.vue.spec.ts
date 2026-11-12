import {shallowMount} from '@vue/test-utils';
import PageContainer from './PageContainer.vue';

describe('pageContainer', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(PageContainer);

    expect(wrapper.element).toMatchInlineSnapshot(`
      <div
        class="min-h-full lg:pl-80"
      >
        
        
      </div>
    `);
  });
});
