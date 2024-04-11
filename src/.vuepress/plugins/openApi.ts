import fs from 'fs';
import {createPage, type Plugin} from 'vuepress';
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';
import {resolveRefs} from '../theme/client/utils/openApiHelpers';

interface OpenApiPluginConfig {
  specsDir: string;
}

export const openApiPlugin = (config: OpenApiPluginConfig): Plugin => ({
  name: '@myparcel/vuepress-openapi',
  onInitialized(app) {
    // Find all .json files in config.spesDir and create a page for each of them
    fs.readdir(config.specsDir, (err, files) => {
      files.forEach(async (file) => {
        // If the file is a .json file, create a page for it
        if (file.endsWith('.json')) {
          // Read the file and parse it as JSON
          const spec = JSON.parse(fs.readFileSync(`${config.specsDir}/${file}`).toString()) as OpenApiType.Document;
          // Use the basename of the file as the slug
          const slug = file.replace('.json', '');
          // Now generate the page contents
          app.pages.push(
            await createPage(app, {
              path: `/api-reference/${slug}`,
              content: `\
---
title: ${spec.info.title}
description: ${spec.info.description}
---
Version ${spec.info.version}

${spec.info.description ?? ''}

${renderChapters(spec)}
          `,
            }),
          );
        }
      });
    });
  },
});

function renderChapters(document: OpenApiType.Document): string {
  const resolvedDocument = resolveRefs(document);

  let chapters = '';

  if (resolvedDocument.paths) {
    for (const [path, pathObj] of Object.entries(resolvedDocument.paths)) {
      chapters += `
## ${path}
\n
<OpenApiPath :path='${JSON.stringify(pathObj)}' title='${path}' />
    `;
    }
  }

  return chapters;
}
