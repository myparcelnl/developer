<template>
  <div v-if="Object.entries(responseObjects)?.length">
    <h4>Responses</h4>
    <ul class="m-0 p-0">
      <li
        v-for="(response, code) in responseObjects"
        :key="code"
        class="m-0 p-0">
        <Http :code="code" />
        <p
          v-if="response.description"
          class="text-gray-500 text-sm">
          {{ response.description }}
        </p>

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
              v-for="(example, index) in item.examples"
              :key="index"
              :example="example" />
          </DetailsExpand>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {computed, type ComputedRef} from 'vue';
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';
import {isReponseObject} from '@mptheme/client/utils/openApiGuards';
import OpenApiSchema from './OpenApiSchema.vue';
import OpenApiExample from './OpenApiExample.vue';
import Http from './Http.vue';
import DetailsExpand from './DetailsExpand.vue';
import CodeGroup from './CodeGroup.vue';

const props = defineProps<{
  responses: OpenApiType.ResponsesObject;
}>();

// Adds a computed to get only the OpenApiType.ResponseObject types from the responses prop.
const responseObjects: ComputedRef<Record<string, OpenApiType.ResponseObject>> = computed(() => {
  const objects: Record<string, OpenApiType.ResponseObject> = {};
  Object.entries(props.responses)
    .filter((response): response is [string, OpenApiType.ResponseObject] => isReponseObject(response))
    .forEach(([code, response]) => {
      objects[code] = response;
    });
  return objects;
});
</script>
