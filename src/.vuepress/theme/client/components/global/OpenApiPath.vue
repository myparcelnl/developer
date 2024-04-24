<template>
  <article class="open-api-path">
    <div
      v-for="(operation, method) in path"
      :key="method">
      <template v-if="typeof operation === 'object'">
        <h3 v-if="'operationId' in operation">
          {{ operation.operationId }}
        </h3>

        <p v-if="'summary' in operation">{{ operation.summary }}</p>

        <OpenApiOperation
          :method="method"
          :endpoint="title"
          :security-schemes="components?.securitySchemes as Record<string, OpenApiType.SecuritySchemeObject>"
          :security-requirements="'security' in operation ? operation.security : undefined" />

        <Markdown
          v-if="'description' in operation && operation.description?.length"
          :content="operation.description" />

        <template v-if="'parameters' in operation">
          <h4>Request parameters</h4>
          <table>
            <thead>
              <th>Parameter</th>
              <th>Location</th>
              <th>Information</th>
            </thead>
            <tr
              v-for="parameter in operation.parameters"
              :key="isParameterType(parameter) ? parameter.name : parameter.$ref">
              <OpenApiRequestParam
                v-if="isParameterType(parameter)"
                :parameter="parameter" />
            </tr>
          </table>
        </template>
        <template v-if="'requestBody' in operation && operation.requestBody">
          <h4>Request body</h4>

          <template v-if="operation.requestBody?.description">
            <Markdown :content="operation.requestBody?.description"></Markdown>
          </template>
          <DetailsExpand
            v-if="'content' in operation.requestBody && operation.requestBody.content"
            tag="h5"
            title="Schema">
            <div
              v-for="(content, key) in operation.requestBody.content"
              :key="key">
              <strong>{{ key }}</strong>
              <OpenApiSchema
                v-if="content.schema && (isSchemaObject(content.schema) || isArraySchemaObject(content.schema))"
                :schema="content.schema" />
            </div>
          </DetailsExpand>
        </template>

        <OpenApiResponses
          v-if="'responses' in operation"
          :responses="operation.responses" />
      </template>
    </div>
  </article>
</template>

<script setup lang="ts">
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';
import {isParameterType, isArraySchemaObject, isSchemaObject} from '@mptheme/client/utils/openApiGuards';
import OpenApiSchema from './OpenApiSchema.vue';
import OpenApiResponses from './OpenApiResponses.vue';
import OpenApiRequestParam from './OpenApiRequestParam.vue';
import OpenApiOperation from './OpenApiOperation.vue';
import Markdown from './Markdown.vue';
import DetailsExpand from './DetailsExpand.vue';

defineProps<{
  title: string;
  path: OpenApiType.PathItemObject;
  components?: OpenApiType.ComponentsObject;
}>();
</script>
