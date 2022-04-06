import { defineVariant } from '../defineVariant';

export const containerVariant = defineVariant('container',
  {
    fluid: '',
    sm: 'max-w-screen-lg',
    md: 'max-w-screen-2xl',
  },
  {
    default: 'md',
  });
