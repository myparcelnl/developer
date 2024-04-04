<template>
  <article class="open-api-path">
    <h2>{{ title }}</h2>
    <div
      v-for="(operation, method) in path"
      :key="method">
      <!-- <OpenApiOperation :path="operation" :title="method" /> -->
      <Badge type="success">{{ method }}</Badge>
      <template v-if="typeof operation === 'object'">
        <h3 v-if="'operationId' in operation">
          {{ operation.operationId }}
        </h3>
        <p v-if="'summary' in operation">{{ operation.summary }}</p>
        <p v-if="'description' in operation">{{ operation.description }}</p>

        <!-- TODO: Parameters table -->

        <OpenApiResponses
          v-if="'responses' in operation"
          :responses="operation.responses" />
      </template>
    </div>
  </article>
</template>

<script setup lang="ts">
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';
import OpenApiResponses from './OpenApiResponses.vue';
import Badge from './Badge.vue';

defineProps<{
  title: string;
  path: OpenApiType.PathItemObject;
}>();
</script>
