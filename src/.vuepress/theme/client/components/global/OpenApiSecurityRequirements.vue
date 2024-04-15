<template>
  <div v-if="resolvedSchemes?.length">
    <ul>
      <OpenApiSecurityScheme
        v-for="(securityItem, index) in resolvedSchemes"
        :key="index"
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
  const resolved: OpenApiType.SecuritySchemeObject[] = [];

  for (const requirement of props.security) {
    const scheme = resolveRequirementToScheme(requirement);

    if (scheme) {
      resolved.push(scheme);
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
