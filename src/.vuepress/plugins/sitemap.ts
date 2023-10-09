import {type Plugin} from 'vuepress';
import dayjs from 'dayjs';
import {fs, logger, path} from '@vuepress/utils';
import {type GitPluginPageData} from '@vuepress/plugin-git';
import {isOfType} from '../theme/shared/utils';

interface SitemapPluginConfig {
  baseUrl: string;
}

export const sitemapPlugin = (config: SitemapPluginConfig): Plugin => ({
  name: '@myparcel/vuepress-sitemap',
  onGenerated(app) {
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    app.pages.forEach((page) => {
      const pageDate = page.date === '0000-00-00' ? undefined : page.date;
      let timestamp: string | number | undefined = pageDate;

      if (isOfType<GitPluginPageData>(page.data, 'git')) {
        timestamp = page.data.git.updatedTime ?? pageDate;
      }

      const htmlPath = page.htmlFilePathRelative.replace(/\/index\.html$/, '/');

      if (htmlPath === 'index.html') {
        return;
      }

      sitemap += '\n  <url>';
      sitemap += `\n    <loc>${config.baseUrl}${htmlPath}</loc>`;

      if (timestamp) {
        const date = dayjs(timestamp).format('YYYY-MM-DDTHH:mm:ssZ');
        sitemap += `\n    <lastmod>${date}</lastmod>`;
      }

      sitemap += '\n  </url>';
    });

    sitemap += '\n</urlset>';

    logger.success('Generated sitemap.xml!');
    fs.writeFileSync(path.resolve(app.dir.dest(), 'sitemap.xml'), sitemap);
  },
});
