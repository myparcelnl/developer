<template>
  <div class="whitespace-nowrap">
    <strong class="inline-block text-sm">{{ label }}:</strong>
    <code class="ml-2 p-1">{{ value }}</code>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  value: string;
}>();
</script>
