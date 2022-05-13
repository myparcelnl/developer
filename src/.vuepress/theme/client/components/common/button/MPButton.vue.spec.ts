import { describe, expect, it } from 'vitest';
import MPButton from './MPButton.vue';
import { shallowMount } from '@vue/test-utils';

describe('button', () => {
  it('renders content via default slot', () => {
    const wrapper = shallowMount(MPButton, { slots: { default: 'click me' } });

    expect(wrapper.element.textContent).toBe('click me');
  });

  it('gets correct classes applied', () => {
    const wrapper = shallowMount(MPButton);
    expect(wrapper.findByTestId('button__link').element.tagName).toBe('span');
  });
});
