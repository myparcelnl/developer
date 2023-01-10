import {Directive} from 'vue';

export const vTest: Directive<HTMLElement> = (el, binding) => {
  if (process.env.NODE_ENV !== 'test' && !localStorage.getItem('showTestLabels')) {
    return;
  }

  if (typeof binding.value === 'string') {
    el.setAttribute('data-test-id', binding.value);
    return;
  }

  Object.keys(binding.value).forEach((value) => {
    el.setAttribute(`data-test-${value}`, binding.value[value]);
  });
};
