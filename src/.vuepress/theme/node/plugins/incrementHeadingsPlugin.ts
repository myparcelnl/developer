/* eslint-disable @typescript-eslint/no-magic-numbers */
import {Plugin} from 'vuepress';

const MAX_HEADING_LEVEL = 6;

/** .
 * Makes sure all markdown pages have the correct heading hierarchy. H1 and h2 are already placed on the page, so each
 * markdown file SHOULD start from h3, but this code allows the files to start at h1 or h2 too.
 *
 * @returns {Plugin}
 */
export const incrementHeadingsPlugin = (): Plugin => {
  return {
    name: '@myparcel/vuepress-plugin-increment-headings',

    extendsMarkdown: (md) => {
      md.core.ruler.push('incrementHeadings', (state) => {
        const headings = state.tokens.filter((token) => ['heading_open', 'heading_close'].includes(token.type));

        let increment = 0;

        if (headings.some((token) => token.tag === 'h1')) {
          increment = 1;
        }

        if (!increment) {
          return;
        }

        headings.forEach((token) => {
          const num = Number(token.tag.replace('h', ''));
          let headingLevel = num + increment;

          if (headingLevel > MAX_HEADING_LEVEL) {
            headingLevel = MAX_HEADING_LEVEL;
          }

          token.tag = `h${headingLevel}`;
        });
      });
    },
  };
};
