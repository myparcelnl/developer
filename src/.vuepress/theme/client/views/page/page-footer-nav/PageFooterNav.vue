<template>
  <FooterSection
    v-if="prevNavLink || nextNavLink"
    variant="dark">
    <ContentContainer
      type="sm"
      class="flex h-16 place-items-center">
      <nav class="flex-1 grid grid-cols-2">
        <div class="flex">
          <AutoLink
            v-if="prevNavLink"
            :item="prevNavLink"
            class="flex items-center">
            <MyPaIcon
              icon="chevron-left"
              class="text-xl" />
            <span v-text="prevNavLink.text" />
          </AutoLink>
        </div>

        <div class="flex">
          <AutoLink
            v-if="nextNavLink"
            :item="nextNavLink"
            class="flex items-center ml-auto">
            <span v-text="nextNavLink.text" />
            <MyPaIcon
              icon="chevron-right"
              class="text-xl" />
          </AutoLink>
        </div>
      </nav>
    </ContentContainer>
  </FooterSection>
</template>

<script lang="ts">
import { DefaultThemeNormalPageFrontmatter, NavLink, ResolvedSidebarItem } from '@vuepress/theme-default/lib/shared';
import { computed, defineComponent } from 'vue';
import { isPlainObject, isString } from '@vuepress/shared';
import { useNavLink, useSidebarItems } from '@vuepress/theme-default/lib/client/composables';
import AutoLink from '@Components/auto-link/AutoLink.vue';
import ContentContainer from '@mptheme/client/views/layout/content-container/ContentContainer.vue';
import FooterSection from '@mptheme/client/views/layout/footer-section/FooterSection.vue';
import MyPaIcon from '@Components/common/icon/Icon.vue';
import { usePageFrontmatter } from '@vuepress/client';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'PageFooterNav',
  components: {
    AutoLink,
    ContentContainer,
    FooterSection,
    MyPaIcon,
  },

  setup: () => {
    /**
     * Resolve `prev` or `next` config from frontmatter.
     *
     * @param conf
     */
    const resolveFromFrontmatterConfig = (
      conf: unknown,
    ): null | false | NavLink => {
      if (conf === false) {
        return null;
      }

      if (isString(conf)) {
        return useNavLink(conf);
      }

      if (isPlainObject<NavLink>(conf)) {
        return conf;
      }

      return false;
    };

    /**
     * Resolve `prev` or `next` config from sidebar items.
     *
     * @param sidebarItems
     * @param currentPath
     * @param offset
     */
    const resolveFromSidebarItems = (
      sidebarItems: ResolvedSidebarItem[],
      currentPath: string,
      offset: number,
    ): null | NavLink => {
      const index = sidebarItems.findIndex((item) => item.link === currentPath);

      if (index !== -1) {
        const targetItem = sidebarItems[index + offset];

        if (!targetItem?.link) {
          return null;
        }

        return targetItem as NavLink;
      }

      for (const item of sidebarItems) {
        if (item.children) {
          const childResult = resolveFromSidebarItems(
            item.children,
            currentPath,
            offset,
          );

          if (childResult) {
            return childResult;
          }
        }
      }

      return null;
    };
    const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>();
    const sidebarItems = useSidebarItems();
    console.log(sidebarItems);
    const route = useRoute();

    const prevNavLink = computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);

      if (prevConfig !== false) {
        return prevConfig;
      }

      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });

    const nextNavLink = computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);

      if (nextConfig !== false) {
        return nextConfig;
      }

      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });

    return {
      prevNavLink,
      nextNavLink,
    };
  },
});
</script>
