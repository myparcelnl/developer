import { PluginFunction } from 'vuepress';

const plugin: PluginFunction = () => {
  return {
    name: '@myparcel/vuepress-plugin-markdown',

    extendsMarkdownOptions: (md) => {

    },

    extendsMarkdown: (md) => {

    },
  };
};

export default plugin;
