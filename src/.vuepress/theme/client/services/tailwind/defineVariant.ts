import {Prop} from 'vue';

export interface TailwindVariant<
  N = string,
  O = Record<string, string | string[]>,
  P = Prop<OneOrMore<StringKeys<O>>>,
> {
  name: N;
  options: O;
  propOptions?: P;
}

export const defineVariant = <
  N extends string,
  O extends Record<string, string | string[]>,
  P extends Prop<StringKeys<O>>,
>(
  name: N,
  options: O,
  propOptions?: P,
): TailwindVariant<N, O, P> => {
  return {name, options, propOptions};
};
