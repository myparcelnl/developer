import MyPaLogo from './MyPaLogo.vue';
import { shallowMount } from '@vue/test-utils';

describe('myPaLogo', () => {
  it('renders', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1400 });

    const wrapper = shallowMount(MyPaLogo);

    expect(wrapper.find('svg').isVisible()).toBeTruthy();
  });
});
