import fs from 'fs';
import { path } from '@vuepress/utils';

/**
 * Creates an object mapping all files/folders in <from> to "<to>/<from>".
 *
 * @param {string} from
 * @param {string} to
 */
export const createAliasMap = (from: fs.PathLike, to: string): Record<string, fs.PathLike> => Object.fromEntries(
  fs.readdirSync(from)
    .map((file) => [
      `${to}/${file}`,
      path.resolve(from, file),
    ]),
);
