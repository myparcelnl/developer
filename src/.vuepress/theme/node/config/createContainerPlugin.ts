import { ContainerPluginOptions } from '@vuepress/plugin-container';
import { PluginOptions } from 'vuepress';

const classMap: { type: string; classes: string[] }[] = [
  {
    type: 'tip',
    classes: ['before:bg-sky-500', 'bg-sky-50', 'dark:bg-sky-900'],
  },
  {
    type: 'note',
    classes: ['before:bg-amber-500', 'bg-amber-50', 'dark:bg-amber-900'],
  },
];

const defaultClasses: string[] = [
  'before:absolute',
  'before:bottom-0',
  'before:h-full',
  'before:left-0',
  'before:top-0',
  'before:w-1',
  'border',
  'dark:text-slate-200',
  'overflow-hidden',
  'px-3',
  'py-3',
  'relative',
  'rounded',
];

export const createContainerPlugins = (): PluginOptions[] => {
  return classMap.map((item) => {
    const classes = [...defaultClasses, ...item.classes].join(' ');

    const options: ContainerPluginOptions = {
      type: item.type,
      before: () => `<div class="${classes}" role="note">`,
      after: () => '</div>',
    };

    return [
      '@vuepress/container',
      options,
    ];
  });
};
