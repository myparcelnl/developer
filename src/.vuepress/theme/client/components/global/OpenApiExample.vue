<template>
  <template v-if="example">
    <strong class="inline-block text-sm">{{ title || 'Example' }}:</strong>&nbsp;
    <p
      v-if="isExampleObject(example) && example.summary"
      class="text-sm">
      {{ example.summary }}
    </p>

    <div
      v-if="isExampleObject(example) && example.description"
      class="text-sm"
      v-html="example.description" />

    <template v-if="formattedExample">
      <CodeBlock
        v-if="isMultilineString"
        :code="formattedExample"
        language="json" />
      <code
        v-else
        class="inline-block m-0 p-1 text-sm"
        >{{ formattedExample }}</code
      >
    </template>
  </template>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';
import CodeBlock from './CodeBlock.vue';

const props = defineProps<{
  title?: string;
  example?: OpenApiType.ExampleObject | unknown;
}>();

const formattedExample = computed(() => {
  if (!props.example) return undefined;

  if (isExampleObject(props.example)) return formatExample(props.example.value);

  if (typeof props.example === 'object') return formatExample(props.example);

  return props.example.toString();
});

// Check the formattedExample for linebreaks, if it has those, it's a multiline string
const isMultilineString = computed(() => formattedExample.value?.includes('\n'));

function formatExample(example: unknown): string {
  const spacing = 2;

  return JSON.stringify(example, null, spacing);
}

// Guard to check if example is an Example object
const isExampleObject = (example: unknown): example is OpenApiType.ExampleObject => {
  return (
    !!example && typeof example === 'object' && 'summary' in example && 'description' in example && 'value' in example
  );
};
</script>
