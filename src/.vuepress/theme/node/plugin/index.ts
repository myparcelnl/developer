import { PluginFunction } from 'vuepress';
// import fs from 'fs';

const plugin: PluginFunction = () => {
  return {
    name: '@myparcel/vuepress-plugin-markdown',
    extendsPageOptions: (pageOptions, app) => {
      if (pageOptions.filePath?.endsWith('readme.md')) {
        pageOptions.frontmatter ??= {};
        pageOptions.frontmatter.index = true;
      }
    },

    extendsMarkdown: (md, app) => {
      // fs.writeFileSync('md.json', JSON.stringify(md, null, 2));

      // md.linkify.add('@', {
      //   validate: (text, pos, self) => {
      //     return false;
      //   },
      //   normalize: (match) => {
      //
      //   },
      // });
    },
    extendsPage: (extendable, app) => {
      // console.log(extendable);
    },
  };
};

export default plugin;
