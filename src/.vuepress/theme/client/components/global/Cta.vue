<template>
  <component
    :is="link ? 'AutoLink' : 'div'"
    :item="link"
    class="border flex flex-col group no-link-styles overflow-hidden p-6 relative rounded-xl">
    <slot name="before" />

    <slot v-if="$slots.default" />
    <template v-else>
      <Icon
        v-if="icon"
        class="text-5xl"
        :icon="icon" />

      <MPImg
        v-if="img"
        alt=""
        class="h-32 w-full"
        image-class="m-auto"
        :class="imgClass"
        :src="img" />

      <component
        :is="heading"
        v-if="title"
        class="pb-0">
        {{ title }}
      </component>

      <p
        v-if="subtitle"
        v-text="subtitle" />

      <div class="flex mt-auto">
        <MPButton
          v-if="link"
          class="inline-flex"
          :aria-label="ariaLabel"
          v-bind="buttonAttributes">
          <template v-if="linkText">
            {{ linkText }}
          </template>
          <Icon
            v-else
            icon="chevron-right" />
        </MPButton>
      </div>
    </template>

    <slot name="after" />
  </component>
</template>

<script lang="ts">
import Icon from '@mptheme/client/components/common/icon/Icon.vue';
import MPButton from '@mptheme/client/components/common/button/MPButton.vue';
import MPImg from '@mptheme/client/components/global/MPImg.vue';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Cta',
  components: {MPImg, Icon, MPButton},

  props: {
    img: {
      type: String,
      default: null,
    },

    title: {
      type: String,
      default: null,
    },

    subtitle: {
      type: String,
      default: null,
    },

    icon: {
      type: String,
      default: null,
    },

    link: {
      type: String,
      default: null,
    },

    ariaLabel: {
      type: String,
      required: true,
    },

    linkText: {
      type: String,
      default: null,
    },

    imgClass: {
      type: String,
      default: null,
    },

    heading: {
      type: String,
      default: 'h3',
    },

    buttonAttributes: {
      type: Object,
      default: null,
    },
  },
});
</script>
