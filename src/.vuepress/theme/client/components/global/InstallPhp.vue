<template>
  <CodeBlock
    :code="`composer ${command}${dev ? ' --dev' : ''} ${package}`"
    language="bash" />
</template>

<script setup lang="ts">
import CodeBlock from './CodeBlock.vue';

withDefaults(
  defineProps<{
    package: string;
    dev?: boolean;
    command?: string;
  }>(),
  {
    command: 'require',
  },
);
</script>
