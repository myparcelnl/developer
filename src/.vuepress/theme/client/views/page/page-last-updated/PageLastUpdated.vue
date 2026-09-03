<template>
  <div>
    <span>{{ translate('lastUpdatedText') }}&nbsp;</span>

    <ClientOnly>
      <span v-text="lastUpdated" />
    </ClientOnly>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {ClientOnly} from '@vuepress/client';
import {useLastUpdated, useTranslate} from '@mptheme/client/composables';

export default defineComponent({
  name: 'PageLastUpdated',
  components: {ClientOnly},
  setup: () => {
    return {
      lastUpdated: useLastUpdated(),
      translate: useTranslate(),
    };
  },
});
</script>
