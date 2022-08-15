import { GitPluginPageData } from '@vuepress/plugin-git';
import { Plugin } from 'vuepress';
import dayjs from 'dayjs';
import fs from 'fs';
import { isOfType } from '../theme/shared/utils';
import path from 'path';

interface SitemapPluginConfig {
  baseUrl: string;
}

export const sitemapPlugin = (config: SitemapPluginConfig): Plugin => ({
  name: '@myparcel/vuepress-sitemap',
  onGenerated(app) {
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    app.pages
      .filter((page) => page.htmlFilePathRelative.endsWith('.html'))
      .forEach((page) => {
        let timestamp: string | number = page.date;

        if (isOfType<GitPluginPageData>(page.data, 'git')) {
          timestamp = page.data.git.updatedTime ?? page.date;
        }

        const date = dayjs(timestamp).format('YYYY-MM-DDTHH:mm:ssZ');

        sitemap += `
  <url>
    <loc>${config.baseUrl}${page.htmlFilePathRelative}</loc>
    <lastmod>${date}</lastmod>
  </url>`;
      });

    sitemap += '\n</urlset>';

    fs.writeFileSync(path.resolve(app.dir.dest(), 'sitemap.xml'), sitemap);
  },
});
