<template>
  <header>
    <strong v-if="title">{{ title }}</strong>
    <strong v-else-if="schema && schema.title">{{ schema.title }}</strong>
    <span
      v-if="isRequired"
      title="Required"
      class="text-red-600"
      >*</span
    >
    <pre
      v-if="schema && schema.type"
      class="m-0 p-0 text-sm whitespace-nowrap">
          {{ schema.type }}
          <template v-if="schema.format">({{ schema.format }})</template>
      </pre>

    <Markdown
      v-if="schema && schema.description"
      :content="schema.description"
      class="m-0 p-0 text-gray-500 text-sm" />

    <div v-if="schema && schema.enum?.length">
      <strong class="text-sm">Possible values:</strong>
      <ul
        v-if="schema.enum.length < 10"
        class="columns-2 list-disc">
        <li
          v-for="(value, index) in schema.enum"
          :key="index">
          <code>{{ value }}</code>
        </li>
      </ul>
      <details v-else>
        <summary>View all</summary>
        <ul class="columns-2 list-disc">
          <li
            v-for="(value, index) in schema.enum"
            :key="index">
            <code>{{ value }}</code>
          </li>
        </ul>
      </details>
    </div>

    <div v-if="schema && schema.default">
      <strong class="inline-block text-sm">Default:</strong>&nbsp;
      <code class="inline-block m-0 p-1 text-sm">{{ schema.default }}</code>
    </div>

    <div v-if="schema && schema.pattern">
      <strong class="inline-block text-sm">Pattern:</strong>&nbsp;
      <code class="inline-block m-0 p-1 text-sm">{{ schema.pattern }}</code>
    </div>

    <div v-if="schema.externalDocs">
      <Markdown
        v-if="schema.externalDocs.description"
        :content="schema.externalDocs.description" />
      <a
        :href="schema.externalDocs.url"
        target="_blank"
        rel="noopener"
        >External documentation</a
      >
    </div>

    <div v-if="schema.multipleOf !== undefined">
      <strong class="inline-block text-sm">Multiple of:</strong> <code>{{ schema.multipleOf }}</code>
    </div>

    <div v-if="schema.maximum !== undefined">
      <strong class="inline-block text-sm">Max:</strong
      ><code>{{ schema.exclusiveMaximum ? '<' : '<=' }} {{ schema.maximum }}</code>
    </div>

    <div v-if="schema.minimum !== undefined">
      <strong class="inline-block text-sm">Min:</strong
      ><code>{{ schema.exclusiveMinimum ? '>' : '>=' }} {{ schema.minimum }}</code>
    </div>

    <div v-if="schema.maxLength !== undefined">
      <strong class="inline-block text-sm">Max length:</strong> <code>{{ schema.maxLength }}</code>
    </div>

    <div v-if="schema.minLength !== undefined">
      <strong class="inline-block text-sm">Min length:</strong> <code>{{ schema.minLength }}</code>
    </div>

    <div v-if="schema.maxItems !== undefined">
      <strong class="inline-block text-sm">Max items:</strong> <code>{{ schema.maxItems }}</code>
    </div>

    <div v-if="schema.minItems !== undefined">
      <strong class="inline-block text-sm">Min items:</strong> <code>{{ schema.minItems }}</code>
    </div>

    <div v-if="schema.maxProperties !== undefined">
      <strong class="inline-block text-sm">Max properties:</strong> <code>{{ schema.maxProperties }}</code>
    </div>

    <div v-if="schema.minProperties !== undefined">
      <strong class="inline-block text-sm">Min properties:</strong> <code>{{ schema.minProperties }}</code>
    </div>

    <div v-if="schema.additionalProperties !== undefined && typeof schema.additionalProperties === 'boolean'">
      <strong class="inline-block text-sm">Additional properties:</strong>
      <code>{{ !!schema.additionalProperties }}</code>
    </div>

    <template v-if="schema.example">
      <OpenApiExample :example="schema.example" />
    </template>

    <template v-if="schema.examples">
      <OpenApiExample
        v-for="(example, index) in schema.examples"
        :key="index"
        :example="example" />
    </template>
  </header>
</template>

<script setup lang="ts">
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';
import {Markdown} from '@mptheme/client/components/global';
import OpenApiExample from './OpenApiExample.vue';

defineProps<{
  title?: string;
  schema: OpenApiType.SchemaObject;
  isRequired?: boolean;
}>();
</script>
