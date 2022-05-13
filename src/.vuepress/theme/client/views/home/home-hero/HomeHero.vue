<template>
  <ContentContainer
    type="fluid"
    class="bg-monstera-500 dark:bg-monstera-700 overflow-hidden py-32 relative text-center">
    <FloepjeBgLeft
      role="none"
      aria-hidden="true"
      class="absolute bottom-0 left-0 select-none w-1/3"
      @dragstart.prevent="null" />

    <FloepjeBgLeft
      role="none"
      aria-hidden="true"
      class="absolute right-0 rotate-180 select-none top-0 w-1/3"
      @dragstart.prevent="null" />

    <ContentContainer class="relative">
      <h1
        class="text-6xl text-white"
        v-text="frontmatter.title" />

      <p
        class="font-display pb-4 text-xl text-zinc-300"
        v-text="frontmatter.subtitle" />

      <MPButtonGroup>
        <MPButton
          v-for="item in frontmatter.actions"
          :key="item.link"
          :variant="item.variant"
          :link="useNavLink(item.link)">
          {{ item.title }}
        </MPButton>
      </MPButtonGroup>
    </ContentContainer>
  </ContentContainer>
</template>

<script lang="ts">
import ContentContainer from '@mptheme/client/views/layout/content-container/ContentContainer.vue';
import FloepjeBgLeft from '@Public/images/floepje_bg_left.svg';
import MPButton from '@mptheme/client/components/common/button/MPButton.vue';
import MPButtonGroup from '@mptheme/client/components/common/MPButtonGroup.vue';
import { MyPaHomepageFrontmatter } from '@mptheme/config.types';
import { defineComponent } from 'vue';
import { useNavLink } from '@vuepress/theme-default/lib/client/composables';
import { usePageFrontmatter } from '@vuepress/client';

export default defineComponent({
  name: 'HomeHero',
  components: {
    MPButtonGroup,
    MPButton,
    ContentContainer,
    FloepjeBgLeft,
  },

  setup: () => {
    const frontmatter = usePageFrontmatter<MyPaHomepageFrontmatter>();

    return {
      useNavLink,
      frontmatter,
    };
  },

});
</script>
