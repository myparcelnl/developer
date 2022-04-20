<template>
  <ContentContainer
    type="fluid"
    class="bg-moss-500 dark:bg-moss-700 overflow-hidden py-24 relative">
    <FloepjeBgLeft
      role="none"
      aria-hidden="true"
      class="absolute bottom-0 left-0 select-none w-1/3"
      src="/images/floepje_bg_left.svg"
      @dragstart.prevent="null" />

    <FloepjeBgRight
      role="none"
      aria-hidden="true"
      class="absolute right-0 select-none top-0 w-1/3"
      src="/images/floepje_bg_right.svg"
      @dragstart.prevent="null" />

    <ContentContainer class="relative">
      <h1
        class="text-6xl text-white"
        v-html="title" />

      <p
        class="font-display text-xl text-slate-300"
        v-text="frontmatter.subtitle" />

      <CButtonGroup>
        <MyPaButton
          v-for="item in frontmatter.actions"
          :key="item.link"
          :variant="item.variant"
          :link="{
            ...useNavLink(item.link),
            text: item.title,
          }" />
      </CButtonGroup>
    </ContentContainer>
  </ContentContainer>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import CButtonGroup from '@mptheme/client/components/common/CButtonGroup.vue';
import ContentContainer from '@mptheme/client/views/layout/content-container/ContentContainer.vue';
import FloepjeBgLeft from '@Public/images/floepje_bg_left.svg';
import FloepjeBgRight from '@Public/images/floepje_bg_right.svg';
import MyPaButton from '@mptheme/client/components/common/button/MyPaButton.vue';
import { MyPaHomepageFrontmatter } from '@mptheme/config.types';
import { useNavLink } from '@vuepress/theme-default/lib/client/composables';
import { usePageFrontmatter } from '@vuepress/client';

export default defineComponent({
  name: 'HomeHero',
  components: {
    CButtonGroup,
    MyPaButton,
    ContentContainer,
    FloepjeBgLeft,
    FloepjeBgRight,
  },

  setup: () => {
    const frontmatter = usePageFrontmatter<MyPaHomepageFrontmatter>();

    const title = computed(() => {
      const plainTitle = frontmatter.value?.title;

      if (!plainTitle) {
        return null;
      }

      const shouldReplace = plainTitle.includes('[') && plainTitle.includes(']');

      if (!shouldReplace) {
        return plainTitle;
      }

      let titleHtml = plainTitle.replace('[', '<span class="bg-clip-text bg-gradient-to-tr from-goldfish-100 text-transparent to-goldfish-600 via-goldfish-500">');
      titleHtml = titleHtml.replace(']', '</span>');

      return titleHtml;
    });

    return {
      useNavLink,
      frontmatter,
      title,
    };
  },

});
</script>
