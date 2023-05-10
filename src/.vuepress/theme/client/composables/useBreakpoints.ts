import {breakpointsTailwind, useBreakpoints as vueUseBreakpoints} from '@vueuse/core';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useBreakpoints = () => {
  return vueUseBreakpoints(breakpointsTailwind);
};
