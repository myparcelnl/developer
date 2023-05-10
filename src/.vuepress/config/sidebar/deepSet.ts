import {get, set} from 'lodash-unified';

export const deepSet = (object: Record<string, unknown>, path: string | string[], value: unknown): void => {
  const descendant = get(object, path);

  if (descendant === undefined) {
    set(object, path, value);
  }
};
