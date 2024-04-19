<template>
  <div v-if="schema">
    <OpenApiSchemaInfo
      :schema="schema"
      :title="title" />

    <div v-if="isArraySchemaObject(schema) && schema.items">
      <OpenApiSchema
        :schema="schema.items"
        title="Items" />
    </div>

    <table
      v-if="isSchemaObject(schema) && schema.properties"
      class="border-collapse border-spacing-0 table-auto">
      <thead class="bg-gray-200 dark:bg-opacity-10">
        <th>Name</th>
        <th v-if="anyPropertyHasNesting(schema.properties)">Content</th>
      </thead>

      <tbody>
        <tr
          v-for="(property, key) in schema.properties"
          :key="key"
          :has-nested-table="propertyHasNesting(key, Object.keys(property))">
          <td class="align-top">
            <OpenApiSchemaInfo
              :schema="property"
              :is-required="schema.required?.includes(key.toString())"
              :title="key.toString()" />
          </td>

          <td
            v-if="isSchemaObject(property) && propertyHasNesting(key, Object.keys(property))"
            class="align-top">
            <a
              v-if="collapsible"
              href="#"
              class="inline-flex items-center no-link-styles text-goldfish-500 text-sm"
              @click.prevent="showNested = !showNested">
              <template v-if="showNested">
                <span>Hide content</span>
                <i class="align-middle flex-1 icon-chevron-left inline-flex" />
              </template>
              <template v-else><span>Show content</span> <i class="align-middle icon-chevron-right" /></template>
            </a>

            <div
              v-if="isArraySchemaObject(property) && property.items"
              class="px-2 py-2">
              <OpenApiSchema
                v-show="!collapsible || (collapsible && showNested)"
                :schema="property.items"
                :collapsible="true" />
            </div>

            <div
              v-if="property.properties"
              class="px-2 py-2">
              <OpenApiSchema
                v-show="!collapsible || (collapsible && showNested)"
                :schema="{properties: property.properties}"
                :collapsible="true" />
            </div>

            <div
              v-if="property.allOf"
              class="px-2 py-2">
              <strong>All of:</strong>
              <div
                v-for="allOf in property.allOf"
                :key="isSchemaObject(allOf) ? allOf.title : allOf.$ref">
                <OpenApiSchema
                  v-show="!collapsible || (collapsible && showNested)"
                  :schema="allOf"
                  :collapsible="true" />
              </div>
            </div>

            <div
              v-if="property.oneOf"
              class="px-2 py-2">
              <strong>One of:</strong>
              <div
                v-for="oneOf in property.oneOf"
                :key="isSchemaObject(oneOf) ? oneOf.title : oneOf.$ref">
                <OpenApiSchema
                  v-show="!collapsible || (collapsible && showNested)"
                  :schema="oneOf"
                  :collapsible="true" />
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <template v-if="isSchemaObject(schema)">
      <div v-if="schema.additionalProperties && schema.additionalProperties !== true">
        <OpenApiSchema
          :schema="schema.additionalProperties"
          title="Additonal properties" />
      </div>

      <div v-if="schema.not">
        <OpenApiSchema
          :schema="schema.not"
          title="Not" />
      </div>

      <div v-if="schema.allOf">
        <em>All of:</em>
        <div
          v-for="allOf in schema.allOf"
          :key="isSchemaObject(allOf) ? allOf.title : allOf.$ref"
          class="ml-3">
          <OpenApiSchema
            :schema="allOf"
            :collapsible="false" />
        </div>
      </div>

      <div v-if="schema.oneOf">
        <em>One of:</em>
        <div
          v-for="oneOf in schema.oneOf"
          :key="isSchemaObject(oneOf) ? oneOf.title : oneOf.$ref">
          class="ml-3">
          <OpenApiSchema
            :schema="oneOf"
            :collapsible="false" />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {type OpenAPIV3_1 as OpenApiType} from 'openapi-types';
import {isArraySchemaObject, isSchemaObject} from '@mptheme/client/utils/openApiGuards';
import OpenApiSchemaInfo from './OpenApiSchemaInfo.vue';

defineProps<{
  schema: OpenApiType.SchemaObject | OpenApiType.ReferenceObject;
  title?: string;
  collapsible?: boolean;
}>();

const showNested = ref(false);

function anyPropertyHasNesting(properties: OpenApiType.SchemaObject['properties']) {
  return properties
    ? Object.keys(properties).some((key) => propertyHasNesting(key, Object.keys(properties[key])))
    : false;
}

function propertyHasNesting(key: string | number, children: string[]) {
  return (
    key === 'reference' ||
    ['properties', 'items', 'oneOf', 'allOf'].some((propertyName) => children.includes(propertyName))
  );
}
</script>
