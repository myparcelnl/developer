<template>
  <ul
    v-if="servers?.length"
    class="open-api-servers">
    <li
      v-for="(server, index) in servers"
      :key="index">
      <code>{{ server.url }}</code>
      <Markdown
        v-if="server.description"
        :content="server.description" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';
import Markdown from './Markdown.vue';

defineProps<{
  servers: OpenApiType.Document['servers'];
}>();
</script>
