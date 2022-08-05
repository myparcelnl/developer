<template>
  <Cta
    class="hover:text-white text-white"
    :title="title"
    :subtitle="subtitle"
    :icon="icon"
    :link="link"
    aria-label="open"
    link-full
    :button-attributes="{
      variant: ['outlineLight', 'icon'],
      class: 'flex group-hover:translate-x-2 group-focus:translate-x-2 ml-auto transform transition-all select-none',
      tabindex: -1,
    }">
    <template #before>
      <div class="absolute bg-black group-focus:opacity-30 group-hover:opacity-30 inset-0 opacity-0 transition-opacity" />

      <div class="-inset-36 absolute flex left-0 mix-blend-soft-light overflow-hidden top-0">
        <FloepjeLeft class="fill-white opacity-30 pt-4" />
      </div>
    </template>
  </Cta>
</template>

<script lang="ts">
import Cta from '@mptheme/client/components/global/Cta.vue';
import FloepjeLeft from '@Public/images/floepje_left.svg';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeLink',
  components: {
    Cta,
    FloepjeLeft,
  },

  props: {
    icon: {
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

    link: {
      type: String,
      default: null,
    },
  },
});
</script>
