import { defineVariant } from '../defineVariant';

const outlineLight = [
  'border',
  'border-white',
  'text-white',
  'hover:bg-white',
  'focus:bg-white',
  'focus:outline-black',
  'active:bg-white',
  'hover:text-black',
  'focus:text-black',
  'active:text-black',
];

const light = [
  'hover:bg-zinc-100',
  'focus:bg-zinc-100',
  'focus:outline-zinc-300',
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
  'focus:outline-goldfish-700',
  'active:bg-goldfish-500',
  'hover:text-white',
  'focus:text-white',
  'active:text-white',
];

const primary = [
  'hover:bg-goldfish-600',
  'hover:text-white',
  'focus:bg-goldfish-600',
  'focus:outline-goldfish-800',
  'active:bg-goldfish-600',
  'bg-goldfish-500',
  'text-white',
];

const danger = [
  'hover:bg-danger-600',
  'hover:text-white',
  'focus:bg-danger-600',
  'focus:outline-danger-800',
  'active:bg-danger-600',
  'bg-danger-500',
  'text-white',
];

const success = [
  'hover:bg-success-600',
  'hover:text-white',
  'focus:bg-success-600',
  'focus:outline-success-800',
  'active:bg-success-600',
  'bg-success-500',
  'text-white',
];

const warning = [
  'hover:bg-warning-600',
  'hover:text-white',
  'focus:bg-warning-600',
  'focus:outline-warning-800',
  'active:bg-warning-600',
  'bg-warning-500',
  'text-white',
];

const info = [
  'hover:bg-info-600',
  'hover:text-white',
  'focus:bg-info-600',
  'focus:outline-info-800',
  'active:bg-info-600',
  'bg-info-500',
  'text-white',
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
