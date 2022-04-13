import { VueWrapper as RealVueWrapper, DOMWrapper } from '@vue/test-utils';

/**
 * Stuff added by custom plugins, defined in test/vue-test-utils.
 */
declare module '@vue/test-utils' {
  export class VueWrapper extends RealVueWrapper {
    findByTestId(id: string): DOMWrapper<Element>
  }
}
