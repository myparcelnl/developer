<template>
  <section class="open-api-info">
    <hgroup>
      <h2>{{ info.title }}</h2>
      <p>(v{{ info.version }})</p>
      <p v-if="info.description">{{ info.description }}</p>
    </hgroup>
  </section>
</template>

<script setup lang="ts">
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';

defineProps<{
  info: OpenApiType.Document['info'];
}>();
</script>
