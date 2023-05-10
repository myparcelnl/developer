import {breakpointsTailwind} from '@vueuse/core';

export type Breakpoint = keyof typeof breakpointsTailwind;

type RecursiveOverwrite<T, U> = U extends object
  ? {[K in keyof T]: K extends keyof U ? RecursiveOverwrite<T[K], U[K]> : T[K]} & U
  : U;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ExpandRecursively<T> = T extends (...args: any) => any
  ? T
  : T extends object
  ? T extends infer O
    ? {[K in keyof O]: ExpandRecursively<O[K]>}
    : never
  : T;

export type Overwrite<T, U> = ExpandRecursively<RecursiveOverwrite<T, U>>;
