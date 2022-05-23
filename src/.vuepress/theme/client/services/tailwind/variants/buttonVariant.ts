import { defineVariant } from '../defineVariant';

const outlineBase = [
  'border',
  'border-2',
];

const outlineLight = [
  ...outlineBase,
  'border-white',
  'text-white',
  'hover:bg-white',
  'focus:bg-white',
  'active:bg-white',
  'focus:outline-white',
  'hover:text-black',
  'focus:text-black',
  'active:text-black',
];

const outlineGray = [
  ...outlineBase,
  'hover:bg-goldfish-500',
  'hover:border-goldfish-500',
  'hover:text-white',
];

const outline = [
  ...outlineBase,
  'border-goldfish-500',
  'text-goldfish-500',
  'hover:bg-goldfish-500',
  'focus:bg-goldfish-500',
  'active:bg-goldfish-500',
  'focus:outline-black',
  'hover:text-white',
  'focus:text-white',
  'active:text-white',
];

const light = [
  'hover:bg-zinc-200',
  'focus:bg-zinc-200',
  'active:bg-zinc-200',
  'focus:outline-zinc-400',
  'bg-zinc-100',
  'text-black',
  'dark:bg-zinc-800',
  'dark:hover:bg-zinc-700',
  'dark:focus:bg-zinc-700',
  'dark:active:bg-zinc-700',
  'dark:text-white',
];

const outlinePrimary = [
  ...outlineBase,
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
  'hover:text-white',
  'focus:bg-goldfish-600',
  'active:bg-goldfish-600',
  'bg-goldfish-500',
  'text-white',
];

const icon = [
  'w-12',
  'h-12',
  'text-4xl',
];

const iconSm = [
  'w-10',
  'h-10',
];

export const buttonVariant = defineVariant(
  'buttonVariant',
  {
    none: [],
    sm: ['py-1', 'px-2'],
    icon,
    iconSm,
    light,
    outline,
    outlineGray,
    outlineLight,
    outlinePrimary,
    primary,
  },
  {
    default: 'primary',
  },
);
