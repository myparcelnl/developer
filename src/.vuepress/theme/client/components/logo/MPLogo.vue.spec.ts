import MPLogo from './MPLogo.vue';
import { shallowMount } from '@vue/test-utils';

describe('myPaLogo', () => {
  it('renders', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1400 });

    const wrapper = shallowMount(MPLogo);

    expect(wrapper.find('svg').isVisible()).toBeTruthy();
  });
});
