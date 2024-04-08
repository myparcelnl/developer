<template>
  <div v-if="Object.entries(responseObjects)?.length">
    <h4>Responses</h4>
    <ul>
      <li
        v-for="(response, code) in responseObjects"
        :key="code">
        <Http :code="code" />
        <p v-if="response.description">{{ response.description }}</p>

        <template v-for="(item, type) in response.content">
          <section
            v-if="'schema' in item && !!item.schema"
            :key="`schema${type}`">
            <h5>Schema</h5>
            <OpenApiSchema
              :title="type.toString()"
              :schema="item.schema" />
          </section>

          <section
            v-if="'example' in item && item.example"
            :key="`example${type}`">
            <h5>Example</h5>
            <CodeGroup
              :items="[
                {
                  title: type.toString(),
                  code: JSON.stringify(item.example),
                  language: 'json',
                },
              ]">
            </CodeGroup>
          </section>

          <section
            v-if="'examples' in item && item.examples"
            :key="`examples${type}`">
            <h5>Examples</h5>
            <CodeGroup
              v-if="'examples' in item && Object.entries(item.examples)?.length"
              :items="
                Object.entries(item.examples).map(([key, value]) => ({
                  title: key,
                  code: JSON.stringify(value),
                  language: 'json',
                }))
              ">
            </CodeGroup>
          </section>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {computed, type ComputedRef} from 'vue';
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';
import OpenApiSchema from './OpenApiSchema.vue';
import Http from './Http.vue';
import CodeGroup from './CodeGroup.vue';

const props = defineProps<{
  responses: OpenApiType.ResponsesObject;
}>();

// Guard to check if the response is an OpenApiType.ResponseObject.
const isReponseObject = (response: object): response is OpenApiType.ResponseObject => {
  return typeof response === 'object';
};

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
