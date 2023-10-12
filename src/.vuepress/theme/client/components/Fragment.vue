<template>
  <Component
    :is="component"
    v-if="component">
    <slot />
  </Component>
  <slot v-else />
</template>

<script lang="ts" setup>
import {type Component} from 'vue';

defineProps<{
  component?: string | Component;
}>();
</script>
