<template>
  <div class="flex flex-grow h-12">
    <RouterLink :to="navbarBrandLink">
      <span class="sr-only">
        To homepage
      </span>

      <MPLogo
        :show-from="logoShowFrom"
        :full-from="logoFullFrom" />
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from 'vue';
import { useSiteLocaleData, useThemeLocaleData } from '@mptheme/client/composables';
import { Breakpoint } from '@mptheme/index.types';
import MPLogo from '@mptheme/client/components/logo/MPLogo.vue';
import { useRouteLocale } from '@vuepress/client';

export default defineComponent({
  name: 'NavbarBrand',
  components: {
    MPLogo,
  },

  props: {
    logoShowFrom: {
      type: String as PropType<Breakpoint>,
      default: null,
    },

    logoFullFrom: {
      type: String as PropType<Breakpoint>,
      default: null,
    },
  },

  setup: () => {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();

    const navbarBrandLink = computed(() => themeLocale.value.home ?? routeLocale.value);
    const navbarBrandTitle = computed(() => siteLocale.value.title);

    return {
      navbarBrandLink,
      navbarBrandTitle,
    };
  },
});
</script>
