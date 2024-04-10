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
        :key="flag"
        >{{ flag }}</span
      >
    </template>

    <OpenApiSchema
      v-if="parameter.schema"
      :schema="parameter.schema" />

    <div
      v-if="
        parameter.description &&
        !(parameter.schema && 'description' in parameter.schema && parameter.schema.description?.length)
      "
      class="text-gray-500 text-sm"
      v-html="parameter.description" />

    <!-- TODO use / create examples component! -->
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

  <td>
    <code>{{ parameter.in }}</code>
  </td>

  <td>
    <div
      v-if="parameter.style"
      class="oapi-res-param__param">
      Style: <code>{{ parameter.style }}</code>
    </div>

    <div
      v-if="parameter.content"
      class="oapi-res-param__content">
      <div class="oapi-res-param__muted">Content:</div>
      TODO : MEDIA TYPES
      <!--
        <OpenApiMediaTypes
        :current-locale="currentLocale"
        :data="parameter.content" />
      -->
    </div>
  </td>
</template>

<script setup lang="ts">
import {computed, defineProps} from 'vue';
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';
import OpenApiSchema from './OpenApiSchema.vue';
// import OpenApiObjectModel from './OpenApiObjectModel.vue';
// import OpenApiMediaTypes from './OpenApiMediaTypes.vue';
import OpenApiExample from './OpenApiExample.vue';

const props = defineProps<{
  parameter: OpenApiType.ParameterObject;
}>();

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
