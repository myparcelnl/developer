<template>
  <section class="open-api">
    <OpenApiInfo :info="resolvedDocument.info" />

    <article
      v-for="(item, path) in resolvedDocument.paths"
      :key="path">
      <OpenApiPath
        v-if="item"
        :path="item"
        :title="path" />
    </article>
  </section>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';
import {get} from 'lodash-es';
import OpenApiPath from './OpenApiPath.vue';
import OpenApiInfo from './OpenApiInfo.vue';

const props = defineProps<{
  document: OpenApiType.Document;
}>();

const resolvedDocument = computed(() => resolveRefs(props.document));

// Recursively loop through the entire document and replace any $ref keys with their corresponding values
function resolveRefs(document: OpenApiType.Document): OpenApiType.Document {
  const resolvedDocument = {...document};

  function resolveRefsRecursive(obj: object | (string | number | object)[]) {
    for (const key in obj) {
      if (key === '$ref') {
        const lookup = (obj as {$ref: string})[key];
        // Lookup is a string that defines the path to the referenced object like '#/components/schemas/Example'
        const path = lookup.split('/').slice(1);
        // Find the referenced object in the document using lodash's get function
        const referencedObject = get(resolvedDocument, path);
        // Remove the $ref: '...' key from the object and replace it with the referenced object itself
        obj = Object.assign(obj, referencedObject);
      } else if (typeof obj[key] === 'object' || Array.isArray(obj[key])) {
        // If the value is an object or an array, recursively call this function
        resolveRefsRecursive(obj[key]);
      }
    }
  }

  resolveRefsRecursive(resolvedDocument);

  return resolvedDocument;
}
</script>
