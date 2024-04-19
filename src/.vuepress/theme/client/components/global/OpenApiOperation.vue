<template>
  <header class="bg-gray-100 dark:bg-gray-800 mb-4 mt-4 open-api-operation p-3">
    <strong>Endpoint:</strong>
    <pre
      class="dark:text-black inline-block leading-none m-0 ml-3 p-1 rounded-sm text-sm"
      :class="methodClass">
      {{ method.toUpperCase() }}
    </pre>
    <pre class="dark:text-gray-100 inline m-0 ml-2 p-0 text-gray-700 text-sm">{{ endpoint }}</pre>
    <br />

    <template v-if="securityRequirements?.length && securitySchemes">
      <strong>Authentication:</strong>&nbsp;
      <OpenApiSecurityRequirements
        class="text-sm"
        :security="securityRequirements"
        :security-schemes="securitySchemes" />
    </template>
  </header>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';
import OpenApiSecurityRequirements from '@mptheme/client/components/global/OpenApiSecurityRequirements.vue';

const props = defineProps<{
  method: OpenApiType.HttpMethods;
  endpoint: string;
  securityRequirements?: OpenApiType.SecurityRequirementObject[];
  securitySchemes?: Record<string, OpenApiType.SecuritySchemeObject>;
}>();

const methodClass = computed(() => {
  return {
    'bg-green-200': props.method === 'get',
    'bg-blue-200': props.method === 'post',
    'bg-yellow-200': props.method === 'put',
    'bg-red-200': props.method === 'delete',
    'bg-purple-200': props.method === 'patch',
    'bg-gray-200': props.method === 'options',
    'bg-indigo-200': props.method === 'head',
    'bg-pink-200': props.method === 'trace',
  };
});
</script>
