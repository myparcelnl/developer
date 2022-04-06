<template>
  <i
    :class="classes"
    class="inline-flex" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { iconVariant } from '@mptheme/client/services/tailwind/variants/iconVariant';
import { useTailwindVariant } from '@mptheme/client/services/composables/useTailwindVariant';

const variant = useTailwindVariant(iconVariant);

export default defineComponent({
  name: 'MyPaIcon',
  props: {
    icon: variant.createVariantProp(),
  },

  setup: (props) => {
    return {
      classes: variant.getVariantClasses(props.icon),
    };
  },
});
</script>
