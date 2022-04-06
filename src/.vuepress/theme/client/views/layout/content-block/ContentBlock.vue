<template>
  <component
    :is="tag"
    :class="classes">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { blockVariant } from '@mptheme/client/services/tailwind/variants/blockVariant';
import { useTailwindVariant } from '@mptheme/client/services/composables/useTailwindVariant';

const variant = useTailwindVariant(blockVariant);
const prop = variant.createVariantProp();

export default defineComponent({
  name: 'ContentBlock',

  props: {
    tag: {
      // eslint-disable-next-line no-undef
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: 'div',
    },

    variant: variant.createVariantProp(),
  },

  setup: (props) => {
    return {
      classes: variant.getVariantClasses(props.variant),
    };
  },
});
</script>
