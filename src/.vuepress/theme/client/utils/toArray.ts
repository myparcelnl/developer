/**
 * Makes sure input is converted to an array, if necessary.
 */
export const toArray = <T>(itemOrItems: T | T[], separator?: string): T[] => {
  if (separator && typeof itemOrItems === 'string') {
    return itemOrItems.split(separator) as unknown as T[];
  }

  return Array.isArray(itemOrItems) ? itemOrItems : [itemOrItems];
};
