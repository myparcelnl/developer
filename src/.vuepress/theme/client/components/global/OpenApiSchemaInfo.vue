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
          v-for="value in schema.enum"
          :key="value">
          <code>{{ value }}</code>
        </li>
      </ul>
      <details v-else>
        <summary>View all</summary>
        <ul class="columns-2 list-disc">
          <li
            v-for="value in schema.enum"
            :key="value">
            <code>{{ value }}</code>
          </li>
        </ul>
      </details>
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

    <OpenApiSchemaInfoRestriction
      v-if="schema.default"
      label="Default"
      :value="schema.default"
    />

    <OpenApiSchemaInfoRestriction
      v-if="schema.pattern"
      label="Pattern"
      :value="schema.pattern"
    />
    <OpenApiSchemaInfoRestriction
      v-if="schema.multipleOf !== undefined"
      label="Multiple of"
      :value="schema.multipleOf"
    />

    <OpenApiSchemaInfoRestriction
      v-if="schema.maximum !== undefined"
      label="Max"
      :value="schema.exclusiveMaximum ? '<' : '<=' + schema.maximum"
    />

    <OpenApiSchemaInfoRestriction
      v-if="schema.minimum !== undefined"
      label="Min"
      :value="schema.exclusiveMinimum ? '>' : '>=' + schema.minimum"
    />

    <OpenApiSchemaInfoRestriction
      v-if="schema.maxLength !== undefined"
      label="Max length"
      :value="schema.maxLength"
    />

    <OpenApiSchemaInfoRestriction
      v-if="schema.minLength !== undefined"
      label="Min length"
      :value="schema.minLength"
    />

    <OpenApiSchemaInfoRestriction
      v-if="schema.maxItems !== undefined"
      label="Max items"
      :value="schema.maxItems"
    />

    <OpenApiSchemaInfoRestriction
      v-if="schema.minItems !== undefined"
      label="Min items"
      :value="schema.minItems"
    />

    <OpenApiSchemaInfoRestriction
      v-if="schema.maxProperties !== undefined"
      label="Max properties"
      :value="schema.maxProperties"
    />

    <OpenApiSchemaInfoRestriction
      v-if="schema.minProperties !== undefined"
      label="Min properties"
      :value="schema.minProperties"
    />

    <OpenApiSchemaInfoRestriction
      v-if="schema.additionalProperties !== undefined && typeof schema.additionalProperties === 'boolean'"
      label="Additional properties"
      :value="!!schema.additionalProperties"
    />

    <template v-if="schema.example">
      <OpenApiExample :example="schema.example" />
    </template>

    <template v-if="schema.examples">
      <OpenApiExample
        v-for="example in schema.examples"
        :key="example"
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
