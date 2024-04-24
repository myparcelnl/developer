<template>
  <section class="open-api">
    <OpenApiInfo :info="resolvedDocument.info" />

    <article
      v-for="(item, path) in resolvedDocument.paths"
      :key="path">
      <OpenApiPath
        v-if="item"
        :path="item"
        :components="document.components"
        :title="path" />
    </article>
  </section>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';
import OpenApiPath from './OpenApiPath.vue';
import OpenApiInfo from './OpenApiInfo.vue';
import { resolveRefs } from '@mptheme/client/utils/openApiHelpers';

const props = defineProps<{
  document: OpenApiType.Document;
}>();

const resolvedDocument = computed(() => resolveRefs(props.document));

// Recursively loop through the entire document and replace any $ref keys with their corresponding values
type RecursiveType = {
  [key: string]: unknown | RecursiveType | RecursiveType[];
};
</script>
