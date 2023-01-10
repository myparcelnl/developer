/* eslint-disable @typescript-eslint/no-magic-numbers */
import {ContainerPluginOptions, containerPlugin} from '@vuepress/plugin-container';
import {Plugin} from 'vuepress';

const MESSAGE_TYPES: string[] = ['tip', 'note'];

export const createContainerPlugins = (): Plugin[] => {
  const containers: ContainerPluginOptions[] = [
    {
      type: 'expand',
      before: (args) => {
        const split = /^(?:(h\d): )?(.+)/.exec(args);
        const tag = split?.[1] ?? null;
        const title = split?.[2] ?? null;

        return `<DetailsExpand tag="${tag}" ${title ? `title="${title}"` : ''}>`;
      },
      after: () => '</DetailsExpand>',
    },

    ...MESSAGE_TYPES.map((type): ContainerPluginOptions => {
      return {
        type: type,
        before: (title) => `<Message title="${title}" type="${type}">`,
        after: () => '</Message>',
      };
    }),
  ];

  return containers.map(containerPlugin);
};
