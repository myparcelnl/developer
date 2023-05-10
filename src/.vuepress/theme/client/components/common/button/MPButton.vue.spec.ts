import MPButton from './MPButton.vue';
import {shallowMount} from '@vue/test-utils';
import {vTest} from '@mptheme/client/services/directives/vTest';

const config = {
  global: {
    directives: {
      test: vTest,
    },
  },
};

describe('button', () => {
  it('renders content via default slot', () => {
    const wrapper = shallowMount(MPButton, {
      ...config,
      slots: {
        default: 'click me',
      },
    });

    expect(wrapper.element.textContent).toBe('click me');
  });
});
