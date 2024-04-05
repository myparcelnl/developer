<template>
  <div
    v-if="schema"
    class="">
    <strong
      v-if="title"
      class="items-center schema-row">
      {{ title }}
    </strong>
    <strong v-else-if="schema.title">
      {{ schema.title }}
    </strong>
    <p v-if="schema.description">
      {{ schema.description }}
    </p>
    <div
      v-if="schema.type"
      class="items-center schema-row">
      <span class="font-bold mr-2 schema-row-label">Type:</span>
      <span class="schema-row-value">{{ schema.type }}</span>
    </div>
    <div
      v-if="schema.format"
      class="items-center schema-row">
      <span class="font-bold mr-2 schema-row-label">Format:</span>
      <span class="schema-row-value">{{ schema.format }}</span>
    </div>
    <div
      v-if="schema.enum"
      class="items-center schema-row">
      <div class="font-bold mr-2 schema-row-label">Enum:</div>
      <div class="p-2 schema-row-value">
        <ul class="list-disc">
          <li
            v-for="(value, index) in schema.enum"
            :key="index">
            {{ value }}
          </li>
        </ul>
      </div>
    </div>
    <div
      v-if="schema.default"
      class="items-center schema-row">
      <span class="font-bold mr-2 schema-row-label">Default:</span>
      <span class="schema-row-value">{{ schema.default }}</span>
    </div>
    <div
      v-if="schema.pattern"
      class="items-center schema-row">
      <span class="font-bold mr-2 schema-row-label">Pattern:</span>
      <span class="schema-row-value">{{ schema.pattern }}</span>
    </div>
    <div
      v-if="schema.items"
      class="items-center schema-row">
      <div class="font-bold mr-2 schema-row-label">Items:</div>
      <div class="schema-row-value">
        <OpenApiSchema
          :schema="schema.items"
          title="Items" />
      </div>
    </div>
    <div
      v-if="schema.properties"
      class="items-center schema-row">
      <div class="font-bold mr-2 schema-row-label">Properties:</div>
      <div class="schema-row-value">
        <table
          :open="open"
          class="border-collapse border-spacing-0">
          <thead class="bg-gray-100">
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </thead>
          <tbody>
            <tr
              v-for="(property, key) in schema.properties"
              :key="key"
              :has-nested-table="hasNesting(key, property)">
              <td class="align-top">{{ key }}</td>
              <td class="align-top">
                <pre class="m-0 p-0">{{ property.type }}</pre>
              </td>
              <td class="align-top">
                <strong
                  v-if="property.title"
                  class="schema-row">
                  {{ property.title }}
                </strong>
                <p
                  v-if="property.description"
                  class="schema-row">
                  {{ property.description }}
                </p>

                <div v-if="key === 'reference'">
                  <OpenApiSchema
                    :schema="property"
                    title="reference" />
                </div>
                <div
                  v-if="property.items"
                  class="px-2 py-2">
                  <OpenApiSchema
                    :schema="property.items"
                    title="Items" />
                </div>
                <div
                  v-if="property.properties"
                  class="px-2 py-2">
                  <OpenApiSchema :schema="{properties: property.properties}" />
                </div>
                <div
                  v-if="property.allOf"
                  class="px-2 py-2">
                  <div
                    v-for="(allOf, index) in property.allOf"
                    :key="index">
                    <OpenApiSchema :schema="allOf" />
                  </div>
                </div>
                <div
                  v-if="property.oneOf"
                  class="items-center schema-row">
                  <div class="font-bold mr-2 schema-row-label">One of:</div>
                  <div class="schema-row-value">
                    <div
                      v-for="(oneOf, index) in property.oneOf"
                      :key="index">
                      <OpenApiSchema :schema="oneOf" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div
      v-if="schema.additionalProperties"
      class="items-center schema-row">
      <div class="schema-row-value">
        <OpenApiSchema
          :schema="schema.additionalProperties"
          title="Additonal properties"
          :open="false" />
      </div>
    </div>

    <div
      v-if="schema.allOf"
      class="items-center schema-row">
      <OpenApiSchema
        :schema="assignAllOf(schema.allOf)"
        :open="false" />
    </div>

    <div
      v-if="schema.oneOf"
      class="items-center schema-row">
      <div class="font-bold mr-2 schema-row-label">One of</div>
      <div class="schema-row-value">
        <div
          v-for="(oneOf, index) in schema.oneOf"
          :key="index">
          <OpenApiSchema
            :schema="oneOf"
            :open="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  schema: object;
  title?: string;
  open?: boolean;
}>();

const assignAllOf = (allOf) => {
  return {
    properties: allOf.reduce((acc, curr) => {
      return {...acc, ...curr.properties};
    }, {}),
  };
};

function hasNesting(key: string, property) {
  return key === 'reference' || !!property.properties || !!property.items || !!property.oneOf || !!property.allOf;
}
</script>
