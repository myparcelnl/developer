<template>
  <div>
    <PageFooterParts />
    <HomeFooter />
  </div>
</template>

<script lang="ts">
import HomeFooter from '@mptheme/client/views/home/home-footer/HomeFooter.vue';
import PageFooterParts from '@mptheme/client/views/page/page-footer/PageFooterParts.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageFooter',
  components: {
    PageFooterParts,
    HomeFooter,
  },
});
</script>
