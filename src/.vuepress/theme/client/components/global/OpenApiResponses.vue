<template>
  <div v-if="hasItems">
    <h4>Responses</h4>
    <ul class="m-0 p-0">
      <li
        v-for="(response, code) in responseObjects"
        :key="code"
        class="m-0 p-0">
        <Http :code="code" />

        <Markdown
          v-if="response.description"
          class="text-gray-500 text-sm"
          :content="response.description" />

        <template v-for="(item, type) in response.content">
          <DetailsExpand
            v-if="'schema' in item && !!item.schema"
            :key="`schema${type}`"
            title="Schema"
            tag="strong">
            <OpenApiSchema
              :title="type.toString()"
              :schema="item.schema" />
          </DetailsExpand>

          <DetailsExpand
            v-if="'example' in item && item.example"
            :key="`example${type}`"
            title="Example response"
            tag="strong">
            <OpenApiExample :example="item.example" />
          </DetailsExpand>

          <DetailsExpand
            v-if="'examples' in item && item.examples"
            :key="`examples${type}`"
            title="Example responses"
            tag="strong">
            <OpenApiExample
              v-for="example in item.examples"
              :key="isExampleObject(example) ? example.value : example.$ref"
              :example="example" />
          </DetailsExpand>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';
import {isReponseObject, isExampleObject} from '@mptheme/client/utils/openApiGuards';
import OpenApiSchema from './OpenApiSchema.vue';
import OpenApiExample from './OpenApiExample.vue';
import Markdown from './Markdown.vue';
import Http from './Http.vue';
import DetailsExpand from './DetailsExpand.vue';

const props = defineProps<{
  responses: OpenApiType.ResponsesObject;
}>();

const hasItems = computed<boolean>(() => Object.entries(props.responses).length > 0);

// Adds a computed to get only the OpenApiType.ResponseObject types from the responses prop.
const responseObjects = computed<Record<string, OpenApiType.ResponseObject>>(() => {
  const objects: Record<string, OpenApiType.ResponseObject> = {};
  Object.entries(props.responses)
    .filter((response): response is [string, OpenApiType.ResponseObject] => isReponseObject(response))
    .forEach(([code, response]) => {
      objects[code] = response;
    });
  return objects;
});
</script>
