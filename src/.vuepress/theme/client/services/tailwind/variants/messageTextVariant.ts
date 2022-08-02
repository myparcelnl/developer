import { defineVariant } from '@mptheme/client/services/tailwind/defineVariant';

export const messageTextVariant = defineVariant('messageText', {
  tip: 'text-sky-500',
  note: 'text-amber-500',
  error: 'text-rose-500',
  success: 'text-green-500',
});

export interface MessageItem {
  type: 'tip' | 'note' | 'error' | 'success';
  message: string;
}
