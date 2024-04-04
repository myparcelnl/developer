<template>
  <div v-if="Object.entries(responseObjects)?.length">
    <h4>Responses</h4>
    <ul>
      <li
        v-for="(response, code) in responseObjects"
        :key="code">
        <Http :code="code" />
        <p v-if="response.description">{{ response.description }}</p>

        <CodeGroup
          v-if="response.content"
          :items="mapToCodegroup(response.content)">
        </CodeGroup>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {computed, type ComputedRef} from 'vue';
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';
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

// Maps the response content to a CodeGroupItem array.
const mapToCodegroup = (content: Record<string, OpenApiType.MediaTypeObject>) => {
  return Object.entries(content).map(([responseType, item]) => {
    // @TODO support component references here, too
    return {
      title: responseType,
      code: item.examples ?? item.examples ?? item.example,
      language: responseType,
    };
  });
};
</script>
