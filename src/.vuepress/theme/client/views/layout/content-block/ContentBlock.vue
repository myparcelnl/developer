<template>
  <component
    :is="tag"
    :class="[
      classes,
      {
        'bg-white dark:bg-slate-900': !variant.includes('dark'),
      },
    ]">
    <slot />
  </component>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { blockVariant } from '@mptheme/client/services/tailwind/variants/blockVariant';
import { useTailwindVariant } from '@mptheme/client/services/composables/useTailwindVariant';

const variant = useTailwindVariant(blockVariant);

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
      classes: ['transition-colors', ...variant.getVariantClasses(props.variant)],
    };
  },
});
</script>
