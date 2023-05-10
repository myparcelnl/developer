type DotObject = Record<string, string | number | null | undefined | symbol>;

/**
 * Convert given object or array to an object containing keys in dot notation and values as values.
 *
 * @param {Record<any, any> | any[]} object
 * @param {string} separator
 */
export const dot = (object: Record<string, unknown> | unknown[], separator = '.'): DotObject => {
  const result: DotObject = {};

  const recurse = (object: Record<string, unknown> | unknown[], current = '') => {
    Object.keys(object).forEach((key) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const value = object[key];
      const newKey = current ? `${current}${separator}${key}` : key;

      if (value && typeof value === 'object') {
        recurse(value, newKey);
      } else {
        result[newKey] = value;
      }
    });
  };

  recurse(object);

  return result;
};
