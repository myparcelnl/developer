<template>
  <div
    v-if="lastUpdated"
    class="last-updated meta-item">
    <span class="meta-item-label">{{ themeLocale.lastUpdatedText }}:</span>

    <ClientOnly>
      <span class="meta-item-info">{{ lastUpdated }}</span>
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
