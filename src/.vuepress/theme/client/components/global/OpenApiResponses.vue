<template>
  <div v-if="Object.entries(responseObjects)?.length">
    <h4>Responses</h4>
    <ul>
      <li
        v-for="(response, code) in responseObjects"
        :key="code">
        <h5>Status Code: {{ code }}</h5>
        <p v-if="response.description">{{ response.description }}</p>
        <div
          v-for="(item, responseType) in response.content"
          :key="responseType">
          <h6>{{ responseType }}</h6>
          <pre v-if="item.example">{{ item.example }}</pre>
          <pre
            v-for="(example, index) in item.examples"
            v-else-if="item.examples"
            :key="index"
            >{{ example }}</pre
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {computed, type ComputedRef} from 'vue';
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';

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
