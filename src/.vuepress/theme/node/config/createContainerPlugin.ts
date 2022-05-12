import { ContainerPluginOptions } from '@vuepress/plugin-container';
import { PluginOptions } from 'vuepress';

const types: string[] = ['tip', 'note'];

export const createMessageContainerPlugins = (): PluginOptions[] => {
  return types.map((type) => {
    const options: ContainerPluginOptions = {
      type: type,
      before: () => `<Message type="${type}">`,
      after: () => '</Message>',
    };

    return [
      '@vuepress/container',
      options,
    ];
  });
};
