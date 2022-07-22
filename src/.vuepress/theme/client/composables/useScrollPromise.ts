let promise: null | Promise<unknown> = null;
let promiseResolve: null | ((value?: unknown) => void) = null;

const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => {
      promiseResolve = resolve;
    });
  },

  resolve: () => {
    promiseResolve?.();
    promise = null;
    promiseResolve = null;
  },
};

export const useScrollPromise = (): typeof scrollPromise => {
  return scrollPromise;
};
