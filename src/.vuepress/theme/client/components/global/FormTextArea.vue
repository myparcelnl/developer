<template>
  <FormField
    :id="id"
    :label="label">
    <textarea
      :id="id"
      v-model="model"
      :name="id"
      :required="optional ? null : 'required'"
      :class="classes"
      class="h-32 rounded-lg" />
  </FormField>
</template>

<script lang="ts">
import FormField from '@mptheme/client/components/global/FormField.vue';
import {defaultFormProps} from '@mptheme/client/defaultFormProps';
import {defaultInputClasses} from '@mptheme/client/defaultInputClasses';
import {defineComponent} from 'vue';
import {useVModel} from '@vueuse/core';

export default defineComponent({
  name: 'FormTextArea',
  components: {FormField},

  props: {
    ...defaultFormProps,
  },

  emits: ['update:modelValue'],

  setup: (props, ctx) => ({
    model: useVModel(props, 'modelValue', ctx.emit),
    classes: defaultInputClasses,
  }),
});
</script>
