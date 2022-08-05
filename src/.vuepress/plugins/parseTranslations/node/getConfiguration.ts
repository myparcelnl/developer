import { Locale } from './getLocalePathPrefix';
import fs from 'node:fs';
import grayMatter from 'gray-matter';
import { logger } from '@vuepress/utils';
import path from 'node:path';

export const getConfiguration = async(dir: string): Promise<Locale[]> => {
  return Promise.all(fs.readdirSync(dir)
    .filter((file) => file.endsWith('.yml'))
    .map(async(filename) => {
      const file = await fs.promises.readFile(`${dir}/${filename}`);

      logger.success(`Imported config from "${filename}"`);

      const data = grayMatter(`---
${file.toString('utf-8')}
---`);

      return {
        localeShort: path.basename(filename, '.yml'),
        data: data.data,
      };
    }));
};
