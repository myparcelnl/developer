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
  </td>

  <td>
    <div
      v-if="parameter.in"
      class="oapi-res-param__param">
      In: <code>{{ parameter.in }}</code>
    </div>

    <div
      v-if="parameter.style"
      class="oapi-res-param__param">
      Style: <code>{{ parameter.style }}</code>
    </div>

    <!-- TODO use / create examples component! -->

    <div
      v-if="parameter.example"
      class="oapi-res-param__param">
      Example: <br v-if="exampleString.includes('\n')" /><code v-html="exampleString" />
    </div>
    <div
      v-if="parameter.examples"
      class="oapi-res-param__examples">
      <div class="oapi-res-param__muted">Examples:</div>
      <div
        v-for="(example, exampleName) in parameter.examples"
        :key="exampleName"
        class="oapi-res-param-example">
        <div class="oapi-res-param-example__name">
          {{ exampleName }}
        </div>
        <div
          v-if="example.summary"
          class="oapi-res-param-example__summary">
          {{ example.summary }}
        </div>
        <div
          v-if="example.description"
          class="oapi-res-param-example__description"
          v-html="example.description" />
        <div
          v-if="example.value"
          class="oapi-res-param-example__value">
          <pre v-html="JSON.stringify(example.value, null, 2)" />
        </div>
      </div>
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

const exampleString = computed(() => {
  const spacing = 2;

  if (!props.parameter.example) return '';

  if (typeof props.parameter.example === 'object') return JSON.stringify(props.parameter.example, null, spacing);

  return props.parameter.example.toString();
});
</script>
