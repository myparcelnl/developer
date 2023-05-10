<template>
  <FormField
    :id="id"
    :label="label">
    <select
      :id="id"
      v-model="model"
      :required="optional ? null : 'required'"
      :class="classes"
      class="rounded-full">
      <option
        v-if="emptyOption"
        selected
        disabled
        value="">
        {{ translate('selectEmptyOption') }}
      </option>

      <option
        v-for="option in options"
        :key="`${id}_option_${option.name}`"
        :value="option.name">
        {{ option.label }}
      </option>
    </select>
  </FormField>
</template>

<script lang="ts">
import {PropType, defineComponent} from 'vue';
import FormField from '@mptheme/client/components/global/FormField.vue';
import {defaultFormProps} from '@mptheme/client/defaultFormProps';
import {defaultInputClasses} from '@mptheme/client/defaultInputClasses';
import {useVModel} from '@vueuse/core';
import {useTranslate} from '@mptheme/client/composables';

interface SelectOption {
  name: string;
  label: string;
}

export default defineComponent({
  name: 'FormSelect',
  components: {FormField},

  props: {
    ...defaultFormProps,

    options: {
      type: Array as PropType<SelectOption[]>,
      default: () => [],
    },

    emptyOption: {
      type: Boolean,
    },
  },

  emits: ['update:modelValue'],

  setup: (props, ctx) => {
    return {
      translate: useTranslate(),
      model: useVModel(props, 'modelValue', ctx.emit),
      classes: defaultInputClasses,
    };
  },
});
</script>
