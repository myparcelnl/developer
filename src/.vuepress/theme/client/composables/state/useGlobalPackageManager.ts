import {createGlobalState, useStorage} from '@vueuse/core';

export const useGlobalPackageManager = createGlobalState(() => {
  return useStorage('nodePackageManager', 'npm');
});
