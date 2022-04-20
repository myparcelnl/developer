import { defineVariant } from '@mptheme/client/services/tailwind/defineVariant';

export const blockVariant = defineVariant('block', {
  'border-right': 'border-r',
  'border-bottom': 'border-b',
  'border-left': 'border-l',
  'border-top': 'border-t',
  dark: ['bg-slate-50', 'dark:bg-slate-900'],
});
