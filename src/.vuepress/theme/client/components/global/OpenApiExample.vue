<template>
  <div v-if="example">
    <strong class="inline-block text-sm">{{ title || 'Example' }}:</strong>&nbsp;
    <Markdown
      v-if="isExampleObject(example) && example.summary"
      class="text-sm"
      :content="example.summary" />

    <Markdown
      v-if="isExampleObject(example) && example.description"
      class="text-sm"
      :content="example.description" />

    <CodeBlock
      v-if="formattedExample && isMultilineString"
      :code="formattedExample" />

    <code
      v-else
      class="p-1">
      {{ formattedExample }}
    </code>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';
import {formatExample} from '@mptheme/client/utils/openApiHelpers';
import {isExampleObject} from '@mptheme/client/utils/openApiGuards';
import Markdown from '@mptheme/client/components/global/Markdown.vue';
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
</script>
