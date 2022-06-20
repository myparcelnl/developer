<template>
  <main class="home">
    <ContentContainer
      v-for="item in frontmatter.tree"
      :key="item.title"
      class="lg:py-12 md:py-10 py-6">
      <h1
        v-if="item.title"
        class="text-center"
        v-text="item.title" />
      <p
        v-if="item.subtitle"
        class="font-display text-center text-lg"
        v-text="item.subtitle" />

      <div
        v-if="item.render"
        v-bind="item.render.attributes"
        class="auto-cols-fr gap-4 grid lg:gap-7 pt-5"
        :class="{
          'grid-flow-col': !item.render.attributes,
        }">
        <component
          :is="component.component"
          v-for="(component, index) in item.render.children"
          :key="index + JSON.stringify(component)"
          v-bind="component.attributes" />
      </div>
    </ContentContainer>
  </main>
</template>

<script lang="ts">
import ContentContainer from '@mptheme/client/views/layout/content-container/ContentContainer.vue';
import { MyPaHomepageFrontmatter } from '@mptheme/config.types';
import { defineComponent } from 'vue';
import { usePageFrontmatter } from '@vuepress/client';

export default defineComponent({
  name: 'HomeContent',
  components: {
    ContentContainer,
  },

  setup: () => {
    const frontmatter = usePageFrontmatter<MyPaHomepageFrontmatter>();

    return {
      frontmatter,
    };
  },
});
</script>
