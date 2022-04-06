<template>
  <div class="flex flex-grow h-12">
    <RouterLink
      :to="navbarBrandLink"
      class="flex flex-grow">
      <MyPaLogo
        :show-from="logoShowFrom"
        :full-from="logoFullFrom" />
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { useRouteLocale, useSiteLocaleData } from '@vuepress/client';
import { Breakpoint } from '@mptheme/index.types';
import MyPaLogo from '@Components/logo/MyPaLogo.vue';
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables';

export default defineComponent({
  name: 'NavbarBrand',
  components: {
    MyPaLogo,
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

    const navbarBrandLink = computed(
      () => themeLocale.value.home || routeLocale.value,
    );
    const navbarBrandTitle = computed(() => siteLocale.value.title);

    return {
      navbarBrandLink,
      navbarBrandTitle,
    };
  },
});
</script>
