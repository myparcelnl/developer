<template>
  <section class="open-api-info">
    <hgroup>
      <h2>{{ info.title }}</h2>
      <p>(v{{ info.version }})</p>
      <Markdown
        v-if="info.description"
        :content="info.description" />
    </hgroup>
  </section>
</template>

<script setup lang="ts">
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';
import Markdown from './Markdown.vue';

defineProps<{
  info: OpenApiType.Document['info'];
}>();
</script>
