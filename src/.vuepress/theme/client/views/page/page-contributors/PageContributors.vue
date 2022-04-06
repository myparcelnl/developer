<template>
  <div
    v-if="contributors && contributors.length"
    class="contributors meta-item">
    <span class="meta-item-label">{{ themeLocale.contributorsText }}: </span>
    <span class="meta-item-info">
      <template
        v-for="(contributor, index) in contributors"
        :key="index">
        <span
          class="contributor"
          :title="`email: ${contributor.email}`">
          {{ contributor.name }}
        </span>
        <template v-if="index !== contributors.length - 1">, </template>
      </template>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useContributors } from '@mptheme/client/services/composables/useContributors';
import { useThemeLocaleData } from '@mptheme/client/services/composables/useThemeLocaleData';

export default defineComponent({
  name: 'PageContributors',
  setup: () => {
    return {
      contributors: useContributors(),
      themeLocale: useThemeLocaleData(),
    };
  },
});
</script>
