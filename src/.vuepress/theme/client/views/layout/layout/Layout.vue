<template>
  <div>
    <MPHeader v-if="shouldShowNavbar" />

    <div @click="sidebar.toggle(false)" />

    <MPSidebar />

    <Home v-if="frontmatter.home" />

    <Transition
      v-else
      name="fade-slide-y"
      mode="out-in"
      @beforeEnter="onBeforeEnter"
      @beforeLeave="onBeforeLeave">
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
import { useScrollPromise, useSidebar } from '@mptheme/client/composables';
import Home from '@mptheme/client/views/home/Home.vue';
import MPHeader from '@mptheme/client/views/layout/header/MPHeader.vue';
import MPSidebar from '@mptheme/client/views/layout/sidebar/MPSidebar.vue';
import { MyPaPageFrontmatter } from '@mptheme/config.types';
import Page from '@mptheme/client/views/page/Page.vue';
import { useRouter } from 'vue-router';

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

    const scrollPromise = useScrollPromise();
    const onBeforeEnter = scrollPromise.resolve;
    const onBeforeLeave = scrollPromise.pending;

    return {
      frontmatter,
      onBeforeEnter,
      onBeforeLeave,
      page,
      shouldShowNavbar,
      sidebar,
    };
  },
});
</script>