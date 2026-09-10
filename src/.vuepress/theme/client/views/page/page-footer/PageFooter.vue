<template>
  <div>
    <PageFooterParts />
    <HomeFooter container="sm" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import PageFooterParts from '@mptheme/client/views/page/page-footer/PageFooterParts.vue';
import HomeFooter from '@mptheme/client/views/home/home-footer/HomeFooter.vue';

export default defineComponent({
  name: 'PageFooter',
  components: {
    PageFooterParts,
    HomeFooter,
  },
});
</script>
