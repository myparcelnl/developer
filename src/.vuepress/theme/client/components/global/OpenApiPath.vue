<template>
  <article class="open-api-path">
    <div
      v-for="(operation, method) in path"
      :key="method">
      <template v-if="typeof operation === 'object'">
        <h3 v-if="'operationId' in operation">
          {{ operation.operationId }}
        </h3>

        <p v-if="'summary' in operation">{{ operation.summary }}</p>

        <OpenApiOperation
          :method="method"
          :endpoint="title"
          :authentication="'security' in operation ? operation.security : null" />

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
import OpenApiOperation from './OpenApiOperation.vue';

defineProps<{
  title: string;
  path: OpenApiType.PathItemObject;
}>();
</script>
