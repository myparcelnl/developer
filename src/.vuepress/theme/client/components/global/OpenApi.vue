<template>
  <section class="open-api">
    <OpenApiInfo :info="document.info" />

    <article
      v-for="(item, path) in document.paths"
      :key="path">
      <OpenApiPath
        v-if="item"
        :path="item"
        :title="path" />
    </article>
  </section>
</template>

<script setup lang="ts">
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';
import OpenApiPath from './OpenApiPath.vue';
import OpenApiInfo from './OpenApiInfo.vue';

defineProps<{
  document: OpenApiType.Document;
}>();
</script>
