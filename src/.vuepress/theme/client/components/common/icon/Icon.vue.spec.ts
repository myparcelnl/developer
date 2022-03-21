import { describe, expect, it, beforeAll } from 'vitest';
import Icon from './Icon.vue';
import { shallowMount, VueWrapper } from '@vue/test-utils';

let wrapper: VueWrapper;

describe('icon', () => {
  beforeAll(() => {
    wrapper = shallowMount(Icon, { props: { icon: 'chevron-right' } });
  });

  it('renders as an <i> tag', () => {
    expect(wrapper.element.tagName).toBe('I');
  });

  it('has the correct classes applied', () => {
    expect(wrapper.element.className).toBe('icon-chevron-right inline-flex');
  });
});
