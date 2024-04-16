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
        const document = (await fetch(url).then(async (res) => parseYaml(await res.text()))) as OpenApiType.Document;
        // Use the basename of the file as the slug
        const resolvedDocument = resolveRefs(document);

        // Now generate the page contents
        app.pages.push(await createPage(app, generateOpenApiPage(resolvedDocument)));
      }),
    );
  },
});

function generateOpenApiPage(document: OpenApiType.Document) {
  return {
    path: `/api-reference/${kebabCase(document.info.title)}`,
    content: `\
---
title: ${document.info.title}
description: ${document.info.description}
---
Version ${document.info.version}

${document.info.description ?? ''}

${document.security ? '## Authorization' : ''}
<OpenApiSecurityRequirements
:security='${JSON.stringify(document.security ?? [])}'
:security-schemes='${JSON.stringify(document.components?.securitySchemes ?? [])}' />

${document.servers?.length ? '## Servers' : ''}
<OpenApiServers :servers='${JSON.stringify(document.servers ?? [])}' />

${renderPaths(document, document.paths, 'Endpoints')}

${renderPaths(document, document.webhooks, 'Webhooks')}
                  `,
  };
}

function renderPaths(
  document: OpenApiType.Document,
  paths: OpenApiType.PathsObject | undefined,
  heading: string,
): string {
  if (!paths || !Object.keys(paths).length) return '';

  let chapters = `## ${heading}`;

  for (const [path, pathObj] of Object.entries(paths)) {
    chapters += `
### ${path}
\n
<OpenApiPath :path='${JSON.stringify(pathObj)}' :components='${JSON.stringify(document.components)}' title='${path}' />
    `;
  }

  return chapters;
}
