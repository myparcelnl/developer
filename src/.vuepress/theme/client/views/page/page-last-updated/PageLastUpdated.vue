<template>
  <div v-if="lastUpdated">
    <span>{{ themeLocale.lastUpdatedText }}:</span>

    <ClientOnly>
      <span v-text="lastUpdated" />
    </ClientOnly>
  </div>
</template>

<script lang="ts">
import { ClientOnly } from '@vuepress/client';
import { defineComponent } from 'vue';
import { useLastUpdated } from '@mptheme/client/services/composables/useLastUpdated';
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables';

export default defineComponent({
  name: 'PageLastUpdated',
  components: { ClientOnly },
  setup: () => {
    return {
      themeLocale: useThemeLocaleData(),
      lastUpdated: useLastUpdated(),
    };
  },
});
</script>
