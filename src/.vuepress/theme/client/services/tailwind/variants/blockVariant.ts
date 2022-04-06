import { defineVariant } from '@mptheme/client/services/tailwind/defineVariant';

export const blockVariant = defineVariant('block', {
  'border-right': ['border-r', 'border-r-zinc-200', 'dark:border-r-zinc-700'],
  'border-bottom': ['border-b', 'border-b-zinc-200', 'dark:border-b-zinc-700'],
  'border-left': ['border-l', 'border-l-zinc-200', 'dark:border-l-zinc-700'],
  'border-top': ['border-t', 'border-t-zinc-200', 'dark:border-t-zinc-700'],
  dark: ['bg-zinc-50', 'dark:bg-zinc-800'],
});
