import { describe, expect, it } from 'vitest';
import Page from './MyPaPage.vue';
import { shallowMount } from '@vue/test-utils';

describe('page', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(Page);

    expect(wrapper.element).toMatchInlineSnapshot();
  });
});
