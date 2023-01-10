import {defineVariant} from '@mptheme/client/services/tailwind/defineVariant';

export const blockVariant = defineVariant('block', {
  'border-right': 'border-r',
  'border-bottom': 'border-b',
  'border-left': 'border-l',
  'border-top': 'border-t',
  dark: ['bg-zinc-50', 'dark:bg-zinc-900'],
});
