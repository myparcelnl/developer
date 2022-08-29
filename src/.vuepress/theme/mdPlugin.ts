import MarkdownIt from 'markdown-it';
import Token from 'markdown-it/lib/token';

type ReplaceFunction = (link: string, env: unknown, token: Token) => string;

const replaceAttr = (token: Token, attrName: string, replace: ReplaceFunction, env: unknown): void => {
  token.attrs?.forEach((attr) => {
    if (attr[0] !== attrName) {
      return;
    }

    attr[1] = replace(attr[1], env, token);
  });
};

interface Options {
  replace: ReplaceFunction;
}

export const mdPlugin: MarkdownIt.PluginWithOptions<Options> = (md, options) => {
  if (!options || !options.replace) {
    return false;
  }

  md.core.ruler.after(
    'inline',
    'replace-link',
    (state) => {
      state.tokens
        .filter((token) => token.type === 'inline' && token.children)
        .forEach((token) => {
          token.children?.forEach((token) => {
            const { type } = token;

            if (type === 'link_open') {
              replaceAttr(token, 'href', options.replace, state.env);
            } else if (type === 'image') {
              replaceAttr(token, 'src', options.replace, state.env);
            }
          });
        });
    },
  );
};
