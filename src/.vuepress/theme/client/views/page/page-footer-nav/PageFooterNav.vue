<template>
  <FooterSection
    v-if="prevNavLink || nextNavLink"
    variant="dark">
    <ContentContainer
      type="sm"
      class="flex h-16 place-items-center">
      <nav class="flex-1 grid grid-cols-2">
        <div class="flex">
          <template v-if="prevNavLink">
            <Icon
              icon="chevron-left"
              class="text-xl" />
            <AutoLink
              :item="prevNavLink"
              class="flex items-center">
              <span v-text="prevNavLink.text" />
            </AutoLink>
          </template>
        </div>

        <div class="flex">
          <template v-if="nextNavLink">
            <AutoLink
              :item="nextNavLink"
              class="flex items-center ml-auto">
              <span v-text="nextNavLink.text" />
            </AutoLink>
            <Icon
              icon="chevron-right"
              class="text-xl" />
          </template>
        </div>
      </nav>
    </ContentContainer>
  </FooterSection>
</template>

<script lang="ts">
import AutoLink from '@mptheme/client/components/global/AutoLink.vue';
import ContentContainer from '@mptheme/client/views/layout/content-container/ContentContainer.vue';
import FooterSection from '@mptheme/client/views/layout/footer-section/FooterSection.vue';
import Icon from '@mptheme/client/components/common/icon/Icon.vue';
import { defineComponent } from 'vue';
import { usePrevNextNavLinks } from '@mptheme/client/composables/usePrevNextNavLinks';

export default defineComponent({
  name: 'PageFooterNav',
  components: {
    AutoLink,
    ContentContainer,
    FooterSection,
    Icon,
  },

  setup: () => {
    const { prevNavLink, nextNavLink } = usePrevNextNavLinks();

    return {
      prevNavLink,
      nextNavLink,
    };
  },
});
</script>
