import {defineVariant} from '@mptheme/client/services/tailwind/defineVariant';

export const messageBackgroundVariant = defineVariant('message', {
  tip: ['before:bg-sky-500', 'bg-sky-50', 'dark:bg-sky-900'],
  note: ['before:bg-amber-500', 'bg-amber-50', 'dark:bg-amber-900'],
  error: ['before:bg-rose-500', 'bg-rose-50', 'dark:bg-rose-900'],
  success: ['before:bg-green-500', 'bg-green-50', 'dark:bg-green-900'],
});
