type OneOrMore<T> = T | T[]

/**
 * Gets only string keys from an object, instead of string | number | symbol.
 *
 * @see https://stackoverflow.com/a/51808262/10225966
 */
type StringKeys<T = Record<string, unknown>> = Extract<keyof T, string>

type Extends<T, U extends T> = U;

/**
 * Extend A with B but disregarding original typing of properties with the same
 * name in B.
 */
type Extend<A, B> = Omit<A, keyof B> & B;

type ArrayOneOrMore<T> = { 0: T } & T[];
