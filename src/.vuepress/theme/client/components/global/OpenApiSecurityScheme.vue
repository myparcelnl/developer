<template>
  <li v-if="scheme.type === 'apiKey'">
    <strong>API Key</strong><br />
    <code class="m-0 p-0 text-sm whitespace-nowrap"> {{ scheme.in }}: {{ scheme.name }} </code>
  </li>
  <li v-else-if="scheme.type === 'http'">
    <strong>HTTP</strong><br />
    <code class="m-0 p-0 text-sm whitespace-nowrap"> {{ scheme.scheme }}: {{ scheme.bearerFormat }} </code>
  </li>
</template>

<script setup lang="ts">
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';

defineProps<{
  scheme: OpenApiType.SecuritySchemeObject;
}>();
</script>
