/* eslint-disable @typescript-eslint/no-magic-numbers */
import {type Plugin} from 'vuepress';
import {type MarkdownContainerPluginOptions, markdownContainerPlugin} from '@vuepress/plugin-markdown-container';

const MESSAGE_TYPES: string[] = ['tip', 'note'];

export const createContainerPlugins = (): Plugin[] => {
  const containers: MarkdownContainerPluginOptions[] = [
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

    ...MESSAGE_TYPES.map((type): MarkdownContainerPluginOptions => {
      return {
        type,
        before: (title) => `<Message title="${title}" type="${type}">`,
        after: () => '</Message>',
      };
    }),
  ];

  return containers.map(markdownContainerPlugin);
};
