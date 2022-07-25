<template>
  <Layout disable-sidebar>
    <div class="flex py-8">
      <div class="m-auto text-center">
        <h1
          class="text-6xl"
          v-text="translate('404Page.title')" />

        <p
          class="font-display pb-4 text-xl"
          v-text="translate('404Page.notFound')" />

        <MPButton :link="link" />
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Layout from '@mptheme/client/views/layout/layout/Layout.vue';
import MPButton from '@mptheme/client/components/common/button/MPButton.vue';
import { useNavLink } from '@mptheme/client/composables/useNavLink';
import { useRouteLocale } from '@vuepress/client';
import { useTranslate } from '@mptheme/client/composables';

export default defineComponent({
  name: '404Page',
  components: { MPButton, Layout },
  setup: () => {
    const routeLocale = useRouteLocale();
    const translate: (input: string) => string = useTranslate();

    const link = computed(() => {
      return {
        ...useNavLink(routeLocale.value),
        text: translate('404Page.backToHome'),
      };
    });

    return {
      translate,
      link,
    };
  },
});
</script>
