<template>
  <FooterSection>
    <ContentContainer
      class="grid grid-cols-1 grid-gap-3 lg:grid-cols-none lg:grid-flow-col py-12 sm:grid-cols-2"
      :type="container">
      <div
        v-for="item in themeData.footer"
        :key="item.link">
        <LinkTree :items="[item]" />
      </div>
    </ContentContainer>
  </FooterSection>

  <FooterSection>
    <ContentContainer class="flex py-3">
      <NavbarBrand logo-full-from="sm" />

      <div class="gap-3 grid grid-flow-col ml-auto my-auto">
        <AutoLink
          v-for="item in themeData.footer2"
          :key="item.link"
          :item="item" />
      </div>
    </ContentContainer>
  </FooterSection>
</template>

<script lang="ts">
import AutoLink from '@mptheme/client/components/global/AutoLink.vue';
import ContentContainer from '@mptheme/client/views/layout/content-container/ContentContainer.vue';
import FooterSection from '@mptheme/client/views/layout/footer-section/FooterSection.vue';
import LinkTree from '@mptheme/client/components/common/LinkTree.vue';
import NavbarBrand from '@mptheme/client/views/layout/header/navbar/navbar-brand/NavbarBrand.vue';
import { defineComponent } from 'vue';
import { useThemeData } from '@mptheme/client/composables/useThemeData';

export default defineComponent({
  name: 'HomeFooter',

  components: {
    AutoLink,
    ContentContainer,
    FooterSection,
    LinkTree,
    NavbarBrand,
  },

  props: {
    container: {
      type: String,
      default: 'md',
    },
  },

  setup: () => {
    const themeData = useThemeData();

    return { themeData };
  },
});
</script>
