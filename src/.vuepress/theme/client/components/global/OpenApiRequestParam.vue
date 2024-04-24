<template>
  <td>
    <template v-if="parameter.name">
      <strong>{{ parameter.name }}</strong>
      <span
        v-if="parameter.required"
        class="text-red-500"
        title="Required">
        *
      </span>
      <span
        v-for="flag in flags"
        :key="flag">
        {{ flag }}
      </span>
    </template>

    <OpenApiSchema
      v-if="parameter.schema"
      :schema="parameter.schema" />

    <Markdown
      v-if="parameter.description && !schemaHasDescription(parameter.schema)"
      class="text-gray-500 text-sm"
      :content="parameter.description" />

    <OpenApiExample
      v-if="parameter.example"
      :example="parameter.example" />
    <div v-if="parameter.examples">
      <strong>Examples:</strong>
      <OpenApiExample
        v-for="(example, exampleName) in parameter.examples"
        :key="exampleName"
        :title="exampleName.toString()"
        :example="example">
      </OpenApiExample>
    </div>
  </td>

  <td class="align-top">
    <code v-if="parameter.in">{{ parameter.in }}</code>
  </td>

  <td class="align-top">
    <div v-if="parameter.style">
      Style: <code>{{ parameter.style }}</code>
    </div>
  </td>
</template>

<script setup lang="ts">
import {computed, defineProps} from 'vue';
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';
import OpenApiSchema from './OpenApiSchema.vue';
import OpenApiExample from './OpenApiExample.vue';
import Markdown from './Markdown.vue';

const props = defineProps<{
  parameter: OpenApiType.ParameterObject;
}>();

function schemaHasDescription(schema: OpenApiType.SchemaObject | undefined): boolean {
  return !!(schema && 'description' in schema && schema.description?.length);
}

const flags = computed(() => {
  const arr: string[] = [];

  if (props.parameter.deprecated) {
    arr.push('Deprecated');
  }

  if (props.parameter.allowEmptyValue) {
    arr.push('Allow empty');
  }

  if (props.parameter.allowReserved) {
    arr.push('Allow reserved');
  }

  return arr;
});
</script>
