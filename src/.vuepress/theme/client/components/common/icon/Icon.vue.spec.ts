import Icon from './Icon.vue';
import { shallowMount } from '@vue/test-utils';

describe('icon', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(Icon);

    expect(wrapper.element).toMatchInlineSnapshot(`
<span
  class="icon"
/>
`);
  });
});
