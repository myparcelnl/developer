<template>
  <header>
    <strong v-if="title">{{ title }}</strong>
    <strong v-else-if="schema && schema.title">{{ schema.title }}</strong>
    <span
      v-if="isRequired"
      title="Required"
      class="text-red-600"
      >*</span
    >
    <pre
      v-if="schema && schema.type"
      class="m-0 p-0 text-sm whitespace-nowrap">
          {{ schema.type }}
          <template v-if="schema.format">({{ schema.format }})</template>
      </pre>

    <p
      v-if="schema && schema.description"
      class="m-0 p-0 text-gray-500 text-sm">
      {{ schema.description }}
    </p>

    <template v-if="schema && schema.enum">
      <strong class="text-sm">Enum:</strong>
      <ul class="list-disc">
        <li
          v-for="(value, index) in schema.enum"
          :key="index">
          {{ value }}
        </li>
      </ul>
    </template>

    <template v-if="schema && schema.default">
      <strong class="inline-block text-sm">Default:</strong>&nbsp;
      <pre class="inline-block m-0 p-0 text-sm">{{ schema.default }}</pre>
    </template>

    <template v-if="schema && schema.pattern">
      <strong class="inline-block text-sm">Pattern:</strong>&nbsp;
      <pre class="inline-block m-0 p-0 text-sm">{{ schema.pattern }}</pre>
    </template>

    <template v-if="schema.example">
      <strong class="inline-block text-sm">Example:</strong>&nbsp;
      <pre class="inline-block m-0 p-0 text-sm">{{ schema.example }}</pre>
    </template>
  </header>
</template>

<script setup lang="ts">
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';

defineProps<{
  title?: string;
  schema: OpenApiType.SchemaObject;
  isRequired?: boolean;
}>();
</script>
