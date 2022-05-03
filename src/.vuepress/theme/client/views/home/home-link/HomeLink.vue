<template>
  <Cta
    class="hover:text-white text-white"
    :title="title"
    :subtitle="subtitle"
    :icon="icon"
    :link="link"
    link-full>
    <template #before>
      <div class="absolute bg-black group-hover:opacity-30 inset-0 opacity-0 transition-opacity" />

      <div class="-inset-36 absolute flex left-0 mix-blend-soft-light overflow-hidden top-0">
        <FloepjeLeft class="fill-white opacity-30" />
      </div>
    </template>

    <template #after>
      <MPButton
        tabindex="-1"
        class="flex group-hover:translate-x-2 justify-self-end self-end transform"
        :variant="['icon', 'outlineLight']">
        <Icon icon="chevron-right" />
      </MPButton>
    </template>
  </Cta>
</template>

<script lang="ts">
import Cta from '@mptheme/client/components/global/Cta.vue';
import FloepjeLeft from '@Public/images/floepje_left.svg';
import Icon from '@mptheme/client/components/common/icon/Icon.vue';
import MPButton from '@mptheme/client/components/common/button/MPButton.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeLink',
  components: {
    Cta,
    FloepjeLeft,
    MPButton,
    Icon,
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
