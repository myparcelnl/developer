/**
 * Makes sure input is converted to an array, if necessary.
 *
 * @param itemOrItems
 */
export function toArray<T>(itemOrItems: T | T[]): T[] {
  return Array.isArray(itemOrItems) ? itemOrItems : [itemOrItems];
}
