<template>
  <PageContainer>
    <HomeHero />
    <HomeContent />
    <HomeFooter />
  </PageContainer>
</template>

<script lang="ts">
import HomeContent from '@mptheme/client/views/home/home-content/HomeContent.vue';
import HomeFooter from '@mptheme/client/views/home/home-footer/HomeFooter.vue';
import HomeHero from '@mptheme/client/views/home/home-hero/HomeHero.vue';
import PageContainer from '@mptheme/client/views/page/page-container/PageContainer.vue';
import { defineComponent } from 'vue';

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
