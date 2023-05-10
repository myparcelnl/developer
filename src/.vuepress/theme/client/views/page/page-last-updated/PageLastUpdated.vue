<template>
  <div>
    <span>{{ translate('lastUpdatedText') }}&nbsp;</span>

    <ClientOnly>
      <span v-text="lastUpdated" />
    </ClientOnly>
  </div>
</template>

<script lang="ts">
import {useLastUpdated, useTranslate} from '@mptheme/client/composables';
import {ClientOnly} from '@vuepress/client';
import {defineComponent} from 'vue';

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
