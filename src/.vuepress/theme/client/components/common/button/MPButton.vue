<template>
  <div
    v-test="'button'"
    role="button"
    :tabindex="0"
    :class="[
      'duration-100',
      'font-display',
      'inline-flex',
      'no-underline',
      'rounded-full',
      'select-none',
      'transition-all',
      'whitespace-nowrap',
      ...variantClass,
      {
        ['py-2 px-4']: !variant.includes('icon'),
        ['cursor-pointer']: !disabled,
        ['animate-pulse opacity-60']: disabled,
        ['cursor-not-allowed']: disabled,
      },
    ]"
    :aria-disabled="disabled"
    @click="disabled ? null : $emit('click', $event)">
    <component
      :is="link ? 'AutoLink' : 'span'"
      v-test="'button__link'"
      tabindex="-1"
      :item="link ?? null"
      class="dark:text-inherit flex font-medium m-auto text-inherit">
      <slot />
    </component>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { NavLink } from '@mptheme/config.types';
import { buttonVariant } from '@mptheme/client/services/tailwind/variants/buttonVariant';
import { useTailwindVariant } from '@mptheme/client/services/composables/useTailwindVariant';

const { createVariantProp, getVariantClasses } = useTailwindVariant(buttonVariant);

export default defineComponent({
  name: 'MPButton',

  props: {
    variant: createVariantProp(),

    link: {
      type: Object as PropType<NavLink>,
      default: null,
    },

    /**
     * Whether the button should be disabled.
     */
    disabled: {
      type: Boolean,
    },
  },

  emits: ['click'],

  setup: (props) => {
    return {
      variantClass: getVariantClasses(props.variant),
    };
  },
});
</script>
