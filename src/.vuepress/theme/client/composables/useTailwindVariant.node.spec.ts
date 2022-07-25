import { defineVariant } from '@mptheme/client/services/tailwind/defineVariant';
import { useTailwindVariant } from '@mptheme/client/composables/useTailwindVariant';

const variantDefinition = defineVariant(
  'one',
  {
    red: 'class-for-red',
    yellow: 'class-for-yellow',
    blue: ['classes', 'for', 'blue'],
  },
  {
    required: true,
    default: 'yellow',
  },
);
const variant = useTailwindVariant(variantDefinition);

describe('useTailwindVariant', () => {
  it('can have prop options', () => {
    const prop = variant.createVariantProp();

    expect(prop.required).toBe(true);
    expect(prop.default).toBe('yellow');
  });

  it('gets a single class for a single key', () => {
    expect(variant.getVariantClasses('yellow')).toStrictEqual(['class-for-yellow']);
  });

  it('gets multiple classes for a single key', () => {
    expect(variant.getVariantClasses('blue')).toStrictEqual(['classes', 'for', 'blue']);
  });

  it('gets multiple classes for multiple keys', () => {
    expect(variant.getVariantClasses(['blue', 'yellow'])).toStrictEqual(['classes', 'for', 'blue', 'class-for-yellow']);
  });
});
