import {defineVariant} from '../defineVariant';

export const containerVariant = defineVariant(
  'container',
  {
    fluid: '',
    sm: 'max-w-screen-lg',
    md: 'max-w-screen-xl',
  },
  {
    default: 'md',
  },
);
