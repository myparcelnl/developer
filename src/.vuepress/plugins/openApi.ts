import {parse as parseYaml} from 'yaml';
import {createPage, type Plugin} from 'vuepress';
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';
import {kebabCase} from 'lodash-es';
import {resolveRefs} from '../theme/client/utils/openApiHelpers';

interface OpenApiPluginConfig {
  yamlUrls: string[];
}

export const openApiPlugin = (config: OpenApiPluginConfig): Plugin => ({
  name: '@myparcel/vuepress-openapi',
  async onInitialized(app) {
    // Find all yaml files in config.yamlUrls and create a page for each of them
    await Promise.all(
      config.yamlUrls?.map(async (url) => {
        const spec = (await fetch(url).then(async (res) => parseYaml(await res.text()))) as OpenApiType.Document;
        // Use the basename of the file as the slug
        const slug = kebabCase(spec.info.title);

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

${spec.security ? '## Authorization' : ''}
<OpenApiSecurityRequirements
:security='${JSON.stringify(spec.security ?? [])}'
:security-schemes='${JSON.stringify(spec.components?.securitySchemes ?? [])}' />

## Endpoints
${renderPaths(spec)}
                  `,
          }),
        );
      }),
    );
  },
});

function renderPaths(document: OpenApiType.Document): string {
  const resolvedDocument = resolveRefs(document);

  let chapters = '';

  if (resolvedDocument.paths) {
    for (const [path, pathObj] of Object.entries(resolvedDocument.paths)) {
      chapters += `
### ${path}
\n
<OpenApiPath :path='${JSON.stringify(pathObj)}' :components='${JSON.stringify(document.components)}' title='${path}' />
    `;
    }
  }

  return chapters;
}
