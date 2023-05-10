<template>
  <span class="flex">
    <MPImg
      role="none"
      class="my-auto pr-2 w-6"
      :alt="`Switch to ${language.human}`"
      :src="flag" />

    {{ language.human }}
  </span>
</template>

<script lang="ts">
import {PropType, computed, defineComponent} from 'vue';
import {Language} from '../../../../plugins/parseTranslations/shared';
import MPImg from '@mptheme/client/components/global/MPImg.vue';

const FLAG_URL = 'https://assets.myparcel.nl/skin/general-images/flags/:locale.png';

export default defineComponent({
  name: 'LanguageOption',
  components: {MPImg},
  props: {
    language: {
      type: Object as PropType<Language>,
      required: true,
    },
  },

  setup: (props) => ({
    flag: computed(() => {
      return FLAG_URL.replace(':locale', props.language.alpha2);
    }),
  }),
});
</script>
