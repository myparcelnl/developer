<template>
  <PageFooterNav />

  <FooterSection v-if="editNavLink || lastUpdated || contributors">
    <ContentContainer
      type="sm"
      class="flex h-16 justify-between place-items-center">
      <PageEditLink v-if="editNavLink" />
      <PageLastUpdated v-if="lastUpdated" />
      <PageContributors v-if="contributors" />
    </ContentContainer>
  </FooterSection>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import PageLastUpdated from '@mptheme/client/views/page/page-last-updated/PageLastUpdated.vue';
import PageFooterNav from '@mptheme/client/views/page/page-footer-nav/PageFooterNav.vue';
import PageEditLink from '@mptheme/client/views/page/page-edit-link/PageEditLink.vue';
import PageContributors from '@mptheme/client/views/page/page-contributors/PageContributors.vue';
import FooterSection from '@mptheme/client/views/layout/footer-section/FooterSection.vue';
import ContentContainer from '@mptheme/client/views/layout/content-container/ContentContainer.vue';
import {useLastUpdated} from '@mptheme/client/composables/useLastUpdated';
import {useEditNavLink} from '@mptheme/client/composables/useEditNavLink';
import {useContributors} from '@mptheme/client/composables/useContributors';

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

  setup: () => ({
    contributors: useContributors(),
    editNavLink: useEditNavLink(),
    lastUpdated: useLastUpdated(),
  }),
});
</script>
