import { Locale } from './getLocalePathPrefix';
import { ParseTranslationsPluginOptions } from '../shared';
import fs from 'node:fs';
import { logger } from '@vuepress/utils';
import path from 'node:path';

export const getTranslations = async(options: ParseTranslationsPluginOptions): Promise<Locale[]> => {
  return Promise.all(fs.readdirSync(options.dest)
    .filter((file) => file.endsWith('.json'))
    .map(async(filename) => {
      const file = await fs.promises.readFile(`${options.dest}/${filename}`);

      logger.success(`Imported translations from "${filename}"`);

      return {
        localeShort: path.basename(filename, '.json'),
        data: JSON.parse(file.toString('utf-8')),
      };
    }));
};
