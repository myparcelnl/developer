import { breakpointsTailwind, useBreakpoints as vueUseBreakpoints } from '@vueuse/core';

export const useBreakpoints = () => {
  return vueUseBreakpoints(breakpointsTailwind);
};
