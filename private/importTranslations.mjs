import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(path.dirname(import.meta.url));

let translationsDir = `${__dirname}/../src/.vuepress/public/translations`;

(async() => {
  const locales = (await Promise.all((fs.readdirSync(translationsDir))
    .filter((file) => file.endsWith('.json'))
    .map(async(filename) => {
      const file = await fs.promises.readFile(`${translationsDir}/${filename}`);

      return {
        language: path.basename(filename, '.json'),
        data: JSON.parse(file.toString('utf-8')),
      };
    })));

  const siteLocale = {};
  const themeLocale = {};

  locales.forEach((locale) => {
    const root = locale.language === 'en' ? '/' : `/${locale.language}/`;

    siteLocale[root] ??= {};
    themeLocale[root] ??= {};

    Object
      .entries(locale.data)
      .forEach(([key, value]) => {
        let split = key.split('.');
        let [type, ...keyParts] = split;
        const newKey = keyParts.join('.');

        switch (type) {
          case 'theme':
            // @ts-ignore
            themeLocale[root][newKey] = value;
            break;
          case 'site':
            // @ts-ignore
            siteLocale[root][newKey] = value;
            break;
        }
      });
  });

  const localeData = {
    site: siteLocale,
    theme: themeLocale,
  };

  fs.writeFileSync('src/.vuepress/.temp/localeConfig.js', `
  module.exports = ${JSON.stringify(localeData)};
  `);
  console.log('Wrote locale config to src/.vuepress/.temp/localeConfig.js');
})();
