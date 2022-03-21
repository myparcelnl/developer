/* eslint-disable jsdoc/no-undefined-types */
import { PropOptions } from 'vue';
import { TailwindVariant } from '../tailwind/defineVariant';
import { toArray } from '@mptheme/client/utils/toArray';

const createValidator = <T = any, D = T>(
  options: Record<string, OneOrMore<string>>,
  name: string,
) => (value: unknown): boolean => {
    const values = toArray(value).filter(Boolean);

    return values.every((item) => {
      const isValid = typeof item === 'string' && item in options;

      if (!isValid) {
        // eslint-disable-next-line no-console,max-len,vue/max-len
        console.warn(`Key "${value}" is missing in Tailwind prop validator "${name}". Add this key to avoid related css getting purged in production mode.`);
      }

      return isValid;
    });
  };

export interface VariantDefinition<K extends OneOrMore<StringKeys<T['options']>>, T extends TailwindVariant> {
  getVariantClasses(variant?: K): string[];
  createVariantProp(): PropOptions<K>;
}

export const useTailwindVariant = <
  T extends TailwindVariant,
  K extends OneOrMore<StringKeys<T['options']>>
>(variant: T): VariantDefinition<K, T> => {
  const { name, propOptions, options } = variant;

  return {
    createVariantProp: () => ({
      validator: createValidator(options, name),
      ...propOptions,
    }),

    getVariantClasses: (variant) => {
      if (!variant) {
        return [];
      }

      return toArray(variant)
        .map((variant) => {
          return options.hasOwnProperty(variant)
            ? toArray(options[variant])
            : [];
        })
        .flat();
    },
  };
};
