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
import { useSidebar } from '@mptheme/client/services/composables/useSidebar';

export default defineComponent({
  name: 'MyPaHome',
  components: {
    HomeContent,
    HomeFooter,
    HomeHero,
    PageContainer,
  },

  setup: () => {
    const sidebar = useSidebar();

    return {
      sidebar,
    };
  },
});
</script>
