import { VueWrapper as RealVueWrapper, DOMWrapper, createWrapperError } from '@vue/test-utils';

export const testIdPlugin = (wrapper: RealVueWrapper) => {
  const findByTestId = (id: string): DOMWrapper<Element> => {
    const dataSelector = `[data-test-id='${id}']`;
    const element = wrapper.element.querySelector(dataSelector);

    if (element) {
      return new DOMWrapper(element);
    }

    return createWrapperError('DOMWrapper');
  };

  return {
    findByTestId,
  };
};
