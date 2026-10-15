import {fs, path} from 'vuepress/utils';

/**
 * Creates an object mapping all files/folders in <from> to "<to>/<from>".
 *
 * @param {string} from
 * @param {string} to
 */
export const createAliasMap = (from: string, to: string): Record<string, string> =>
  Object.fromEntries(
    fs.readdirSync(from).map((file) => {
      // Chop .ts extension off aliases.
      const fileName = file.replace('.ts', '');

      return [`${to}/${fileName}`, path.resolve(from, file)];
    }),
  );
