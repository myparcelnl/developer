<template>
  <div v-if="resolvedSchemes?.length">
    <ul>
      <OpenApiSecurityScheme
        v-for="(securityItem, name) in resolvedSchemes"
        :key="name"
        :scheme="securityItem" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';
import {OpenApiSecurityScheme} from '@mptheme/client/components/global';

const props = defineProps<{
  security: OpenApiType.SecurityRequirementObject[];
  securitySchemes: Record<string, OpenApiType.SecuritySchemeObject>;
}>();

const resolvedSchemes = computed(() => {
  const resolved: Record<string, OpenApiType.SecuritySchemeObject> = {};

  for (const requirement of props.security) {
    const scheme = resolveRequirementToScheme(requirement);

    if (scheme) {
      resolved[Object.keys(requirement)[0]] = scheme;
    }
  }

  return resolved;
});

function resolveRequirementToScheme(
  requirement: OpenApiType.SecurityRequirementObject,
): OpenApiType.SecuritySchemeObject | undefined {
  // Find the securityScheme with the same key as the securityRequirement
  return props.securitySchemes[Object.keys(requirement)[0]];
}
</script>
