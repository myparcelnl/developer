import { defineVariant } from '../defineVariant';

const outlineLight = [
  'border',
  'border-white',
  'text-white',
  'hover:bg-white',
  'focus:bg-white',
  'active:bg-white',
  'hover:text-black',
  'focus:text-black',
  'active:text-black',
];

const light = [
  'hover:bg-zinc-100',
  'focus:bg-zinc-100',
  'active:bg-zinc-100',
  'bg-white',
  'text-black',
];

const outlinePrimary = [
  'border',
  'border-goldfish-500',
  'text-goldfish-500',
  'hover:bg-goldfish-500',
  'focus:bg-goldfish-500',
  'active:bg-goldfish-500',
  'hover:text-white',
  'focus:text-white',
  'active:text-white',
];

const primary = [
  'hover:bg-goldfish-600',
  'focus:bg-goldfish-600',
  'active:bg-goldfish-600',
  'bg-goldfish-500',
  'text-white',
];

const danger = [
  'hover:bg-danger-600',
  'focus:bg-danger-600',
  'active:bg-danger-600',
  'bg-danger-500',
];

const success = [
  'hover:bg-success-600',
  'focus:bg-success-600',
  'active:bg-success-600',
  'bg-success-500',
];

const warning = [
  'hover:bg-warning-600',
  'focus:bg-warning-600',
  'active:bg-warning-600',
  'bg-warning-500',
];

const info = [
  'hover:bg-info-600',
  'focus:bg-info-600',
  'active:bg-info-600',
  'bg-info-500',
];

const icon = [
  'w-12',
  'h-12',
  'text-4xl',
];

export const buttonVariant = defineVariant(
  'buttonVariant',
  {
    danger,
    icon,
    info,
    light,
    outlineLight,
    outlinePrimary,
    primary,
    success,
    warning,
  },
  {
    default: 'primary',
  },
);
