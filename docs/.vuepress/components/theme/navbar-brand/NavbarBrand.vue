<template>
  <ClientOnly>
    <img class="h-16" :src="srcWithBase" :alt="navbarBrandTitle" />
  </ClientOnly>
</template>

<script lang="ts">
import {ClientOnly, useSiteLocaleData, withBase} from '@vuepress/client';
import {computed, defineComponent} from 'vue';
import {
  useDarkMode,
  useThemeLocaleData,
} from '@vuepress/theme-default/lib/client/composables';

export default defineComponent({
  name: 'NavbarBrand',
  components: {ClientOnly},
  setup: () => {
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();

    const navbarBrandTitle = computed(() => siteLocale.value.title);
    const logoSrc = computed(() => {
      if (isDarkMode.value && themeLocale.value?.logoDark) {
        return themeLocale.value.logoDark;
      }

      return themeLocale.value?.logo;
    });

    const srcWithBase = computed(() => {
      if (!logoSrc.value) return null;

      return withBase(logoSrc.value);
    });

    return {
      srcWithBase,
      navbarBrandTitle,
    };
  },
});
</script>
