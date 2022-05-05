<template>
  <input
    :id="id"
    v-model="model"
    :type="type"
    class="bg-white border dark:bg-zinc-800 flex-grow focus:outline-goldfish-500 px-4 py-2 rounded">
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useVModel } from '@vueuse/core';

export default defineComponent({ name: 'BaseInput',
  props: {
    id: {
      type: String,
      default: '',
    },

    type: {
      type: String,
      default: 'text',
    },

    modelValue: {
      type: [String, Number],
      default: '',
    },
  },

  emits: ['update:modelValue'],

  setup: (props, ctx) => ({
    model: useVModel(props, 'modelValue', ctx.emit),
  }) });
</script>
