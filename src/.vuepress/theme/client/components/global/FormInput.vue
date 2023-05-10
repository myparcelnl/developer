<template>
  <FormField
    :id="id"
    :label="label">
    <input
      :id="id"
      v-model="model"
      :name="id"
      :required="optional ? null : 'required'"
      :type="type"
      :class="classes"
      class="rounded-full" />
  </FormField>
</template>

<script lang="ts">
import FormField from '@mptheme/client/components/global/FormField.vue';
import {defaultFormProps} from '@mptheme/client/defaultFormProps';
import {defaultInputClasses} from '@mptheme/client/defaultInputClasses';
import {defineComponent} from 'vue';
import {useVModel} from '@vueuse/core';

export default defineComponent({
  name: 'FormInput',
  components: {FormField},

  props: {
    ...defaultFormProps,
    type: {
      type: String,
      default: 'text',
    },
  },

  emits: ['update:modelValue'],

  setup: (props, ctx) => ({
    model: useVModel(props, 'modelValue', ctx.emit),
    classes: defaultInputClasses,
  }),
});
</script>
