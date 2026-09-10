<template>
  <PageContainer>
    <HomeHero />
    <HomeContent />
    <HomeFooter />
  </PageContainer>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import PageContainer from '@mptheme/client/views/page/page-container/PageContainer.vue';
import HomeHero from '@mptheme/client/views/home/home-hero/HomeHero.vue';
import HomeFooter from '@mptheme/client/views/home/home-footer/HomeFooter.vue';
import HomeContent from '@mptheme/client/views/home/home-content/HomeContent.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HomeContent,
    HomeFooter,
    HomeHero,
    PageContainer,
  },
});
</script>
