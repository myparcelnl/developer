<template>
  <component
    :is="tag"
    role="button"
    :tabindex="0"
    class="border-0 duration-200 font-display inline-flex no-underline rounded-full select-none transition-colors whitespace-nowrap"
    :class="[
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
    <div
      v-if="iconLeft"
      class="h-5 inline-flex mt-1 my-auto relative">
      <Transition
        appear
        name="fade-absolute">
        <i
          class="flex mr-2.5"
          :class="`i-${iconLeft}`" />
      </Transition>
    </div>

    <component
      :is="link ? 'AutoLink' : 'span'"
      :item="link ?? null"
      class="flex m-auto">
      <slot />
    </component>

    <div
      v-if=" iconRight"
      class="h-5 inline-flex mt-1 my-auto relative">
      <Transition
        v-if="iconRight"
        appear
        name="fade-absolute">
        <i
          v-show="iconRight"
          class="flex ml-2.5"
          :class="`i-${iconRight}`" />
      </Transition>
    </div>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { NavLink } from '@mptheme/config.types';
import { buttonVariant } from '@mptheme/client/services/tailwind/variants/buttonVariant';
import { useTailwindVariant } from '@mptheme/client/services/composables/useTailwindVariant';

const { createVariantProp, getVariantClasses } = useTailwindVariant(buttonVariant);

export default defineComponent({
  name: 'MyPaButton',

  props: {
    variant: createVariantProp(),

    iconLeft: {
      type: String,
      default: null,
    },

    iconRight: {
      type: String,
      default: null,
    },

    link: {
      type: Object as PropType<NavLink>,
      default: null,
    },

    tag: {
      type: String,
      default: 'div',
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
