<template>
  <AutoLink
    v-if="editNavLink"
    :item="editNavLink" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useEditNavLink } from '@mptheme/client/services/composables/useEditNavLink';
import { useLastUpdated } from '@mptheme/client/services/composables/useLastUpdated';
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables';

export default defineComponent({
  name: 'PageEditLink',

  setup: () => {
    return {
      editNavLink: useEditNavLink(),
      lastUpdated: useLastUpdated(),
      themeLocale: useThemeLocaleData(),
    };
  },
});
</script>
