<template>
  <PageFooterNav />

  <FooterSection>
    <ContentContainer
      type="sm"
      class="flex h-16 justify-between place-items-center">
      <PageEditLink />

      <PageLastUpdated />

      <PageContributors />
    </ContentContainer>
  </FooterSection>
</template>

<script lang="ts">
import ContentContainer from '@mptheme/client/views/layout/content-container/ContentContainer.vue';
import FooterSection from '@mptheme/client/views/layout/footer-section/FooterSection.vue';
import PageContributors from '@mptheme/client/views/page/page-contributors/PageContributors.vue';
import PageEditLink from '@mptheme/client/views/page/page-edit-link/PageEditLink.vue';
import PageFooterNav from '@mptheme/client/views/page/page-footer-nav/PageFooterNav.vue';
import PageLastUpdated from '@mptheme/client/views/page/page-last-updated/PageLastUpdated.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageFooterParts',
  components: {
    ContentContainer,
    PageFooterNav,
    FooterSection,
    PageContributors,
    PageEditLink,
    PageLastUpdated,
  },
});
</script>
