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

<script lang="ts" setup>
import {computed} from 'vue';
import {useRouteLocale} from '@vuepress/client';
import {useNavLink, useTranslate} from '@mptheme/client';
import Layout from '../layout/layout/Layout.vue';
import MPButton from '../../components/common/button/MPButton.vue';

const routeLocale = useRouteLocale();
const translate: (input: string) => string = useTranslate();

const link = computed(() => {
  return {
    ...useNavLink(routeLocale.value),
    text: translate('404Page.backToHome'),
  };
});
</script>
