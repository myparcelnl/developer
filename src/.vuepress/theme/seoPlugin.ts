/* eslint-disable @typescript-eslint/no-magic-numbers */
import {type Page, type Plugin} from 'vuepress';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import dayjs from 'dayjs';
import {type GitPluginFrontmatter, type GitPluginPageData} from '@vuepress/plugin-git';
import {frontmatterPlugin} from '@mdit-vue/plugin-frontmatter';
import {isOfType} from './shared/utils';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Europe/Amsterdam');

// eslint-disable-next-line max-lines-per-function
export const seoPlugin = (): Plugin => {
  return {
    name: '@myparcel/vuepress-seo-plugin',

    extendsMarkdown(md) {
      md.use(frontmatterPlugin, {
        grayMatterOptions: {
          excerpt: true,
        },
      });
    },

    extendsPage: (page) => {
      const excerpt = page.excerpt?.substring(0, 150);

      page.frontmatter.head ??= [];

      page.frontmatter.head = page.frontmatter.head.filter((meta) => meta[1].name !== 'description');

      page.frontmatter.head?.push([
        'meta',
        {
          name: 'description',
          content: `${page.title}${excerpt ? ` – ${excerpt}` : ''}`,
        },
      ]);

      // Add git data to article tags
      if (isOfType<Page<GitPluginPageData, GitPluginFrontmatter>['data']>(page.data, 'git')) {
        if (page.data.git.createdTime) {
          page.date = dayjs(page.data.git.createdTime).format('YYYY-MM-D');
          page.frontmatter.head.push([
            'meta',
            {
              name: 'article:published_time',
              content: dayjs(page.data.git.createdTime).toISOString(),
            },
          ]);
        }

        if (page.data.git.updatedTime) {
          page.frontmatter.head.push([
            'meta',
            {
              name: 'article:modified_time',
              content: dayjs(page.data.git.updatedTime).toISOString(),
            },
          ]);
        }

        page.frontmatter.head.push([
          'meta',
          {
            name: 'article:author',
            content:
              page.data.git.contributors
                ?.map((contributor) => `${contributor.name} <${contributor.email}>`)
                .join(', ') ?? '',
          },
        ]);
      }
    },
  };
};
