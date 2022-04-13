import { Directive } from '@vue/runtime-core';

export const vTest: Directive = (el, binding) => {
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
