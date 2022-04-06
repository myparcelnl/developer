<template>
  <footer>
    <ContentContainer type="sm">
      <PageEditLink />
      <PageLastUpdated />
      <PageContributors />
    </ContentContainer>
  </footer>
</template>

<script lang="ts">
import ContentContainer from '@mptheme/client/views/layout/content-container/ContentContainer.vue';
import PageContributors from '@mptheme/client/views/page/page-contributors/PageContributors.vue';
import PageEditLink from '@mptheme/client/views/page/page-meta/PageEditLink.vue';
import PageLastUpdated from '@mptheme/client/views/page/page-meta/PageLastUpdated.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageMeta',
  components: {
    ContentContainer,
    PageContributors,
    PageEditLink,
    PageLastUpdated,
  },
});
</script>
