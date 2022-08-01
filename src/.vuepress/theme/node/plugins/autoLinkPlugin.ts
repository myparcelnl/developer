import { MarkdownEnv } from '@vuepress/markdown';
import { Plugin } from 'vuepress';

/**
 * Wraps all links with <AutoLink />.
 *
 * @returns {Plugin}
 */
export const autoLinkPlugin = (): Plugin => {
  return {
    name: '@myparcel/vuepress-plugin-auto-link',

    extendsMarkdown: (md) => {
      let renderedLink = false;
      const originalLinkOpen = md.renderer.rules.link_open;
      const originalLinkClose = md.renderer.rules.link_close;

      md.renderer.rules.link_open = (
        tokens,
        idx,
        options,
        env: MarkdownEnv,
        self,
        // eslint-disable-next-line max-params
      ) => {
        tokens[idx].attrPush(['tabindex', '-1']);

        const result = originalLinkOpen?.(tokens, idx, options, env, self);
        const href = tokens[idx].attrGet('href');

        if (href && !tokens[idx].attrGet('class')?.includes('header-anchor')) {
          renderedLink = true;
          return `<AutoLink item="${href}">`;
        }

        return result ?? '';
      };

      md.renderer.rules.link_close = (
        tokens,
        idx,
        options,
        env,
        self,
        // eslint-disable-next-line max-params
      ) => {
        const result = originalLinkClose?.(tokens, idx, options, env, self);

        if (renderedLink) {
          renderedLink = false;
          return '</AutoLink>';
        }

        return result ?? '';
      };
    },
  };
};
