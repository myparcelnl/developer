<template>
  <div>
    <MPHeader v-if="shouldShowNavbar" />

    <div @click="sidebar.toggle(false)" />

    <MPSidebar />

    <Home v-if="frontmatter.home" />

    <Transition
      v-else
      name="fade-slide-y"
      mode="out-in">
      <slot v-if="frontmatter.bare" />
      <Page
        v-else
        :key="page.path">
        <template #content>
          <slot />
        </template>
      </Page>
    </Transition>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted } from 'vue';
import { usePageData, usePageFrontmatter } from '@vuepress/client';
import Home from '@mptheme/client/views/home/Home.vue';
import MPHeader from '@mptheme/client/views/layout/header/MPHeader.vue';
import MPSidebar from '@mptheme/client/views/layout/sidebar/MPSidebar.vue';
import { MyPaPageFrontmatter } from '@mptheme/config.types';
import Page from '@mptheme/client/views/page/Page.vue';
import { useRouter } from 'vue-router';
import { useSidebar } from '@mptheme/client/composables';

export default defineComponent({
  name: 'Layout',
  components: { MPHeader, Home, Page, MPSidebar },

  setup: () => {
    const page = usePageData();
    const frontmatter = usePageFrontmatter<MyPaPageFrontmatter>();
    const sidebar = useSidebar();

    let unregisterRouterHook: () => void;

    const shouldShowNavbar = computed(() => frontmatter.value.navbar !== false);

    onMounted(() => {
      const router = useRouter();

      unregisterRouterHook = router.afterEach(() => {
        sidebar.toggle(false);
      });
    });

    onUnmounted(() => {
      unregisterRouterHook();
    });

    return {
      frontmatter,
      page,
      shouldShowNavbar,
      sidebar,
    };
  },
});
</script>
