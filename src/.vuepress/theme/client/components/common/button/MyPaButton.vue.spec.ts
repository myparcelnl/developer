import { describe, expect, it } from 'vitest';
import MyPaButton from './MyPaButton.vue';
import { shallowMount } from '@vue/test-utils';

describe('button', () => {

  it('renders content via default slot', () => {
    const wrapper = shallowMount(MyPaButton, { slots: { default: 'click me' } });

    expect(wrapper.element.textContent).toBe('click me');
  });

  it('gets correct classes applied', () => {
    const wrapper = shallowMount(MyPaButton);
    expect(wrapper.findByTestId('button__link').element.tagName).toBe('span');
  });

  // it('renders content via default slot', () => {
  //   const wrapper = shallowMount(MyPaButton, { slots: { default: 'click me' } });
  //
  //   expect(wrapper.element.textContent).toBe('click me');
  // });
});
