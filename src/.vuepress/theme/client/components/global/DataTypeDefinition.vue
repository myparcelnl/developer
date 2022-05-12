<template>
  <p
    v-if="description"
    v-text="description" />

  <table>
    <tbody>
      <template v-if="values">
        <tr
          v-for="(value, index) in valuesArray"
          :key="value">
          <th
            v-if="index === 0"
            :rowspan="valuesArray.length">
            Allowed values
          </th>
          <td
            class="w-4/5">
            <code v-text="value" />
          </td>
        </tr>
      </template>

      <tr v-if="pattern">
        <th>Pattern</th>
        <td class="w-4/5">
          <code v-text="pattern" />
        </td>
      </tr>

      <template v-if="example">
        <tr
          v-for="(item, index) in examplesArray"
          :key="item">
          <th
            v-if="index === 0"
            :rowspan="examplesArray.length">
            Examples
          </th>
          <td
            class="w-4/5">
            <code v-text="item" />
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from 'vue';

const createComputedArray = (value: string | string[]) => computed<string[]>(() => {
  if (typeof value === 'string') {
    return value.split(',');
  }

  return value;
});

export default defineComponent({
  name: 'DataTypeDefinition',
  props: {
    description: {
      type: String,
      default: null,
    },

    pattern: {
      type: String,
      default: null,
    },

    values: {
      type: [Array, String] as PropType<string[] | string>,
      default: () => [],
    },

    example: {
      type: [Array, String] as PropType<string[] | string>,
      default: () => [],
    },
  },

  setup: (props) => {
    const examplesArray = createComputedArray(props.example);
    const valuesArray = createComputedArray(props.values);

    return {
      examplesArray,
      valuesArray,
    };
  },
});
</script>
