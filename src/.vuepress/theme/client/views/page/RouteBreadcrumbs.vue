<template>
  <ContentBlock
    variant="border-bottom"
    class="align-center group hover:opacity-100 opacity-70 text-sm transition-opacity">
    <ContentContainer
      type="sm"
      class="py-4">
      <Icon
        icon="globe"
        class="mr-2" />

      <template
        v-for="(item, index) in breadcrumbs"
        :key="item.link">
        <AutoLink
          v-if="item.link"
          :class="`breadcrumb-${index}`"
          :item="item" />

        <span
          v-else
          :class="`breadcrumb-${index}`"
          v-text="item.text" />

        <span v-if="index < breadcrumbs.length - 1">
          <Icon
            class="mt-1 px-1"
            icon="chevron-right" />
        </span>
      </template>
    </ContentContainer>
  </ContentBlock>
</template>

<script lang="ts">
import AutoLink from '@mptheme/client/components/global/AutoLink.vue';
import ContentBlock from '@mptheme/client/views/layout/content-block/ContentBlock.vue';
import ContentContainer from '@mptheme/client/views/layout/content-container/ContentContainer.vue';
import Icon from '@mptheme/client/components/common/icon/Icon.vue';
import {defineComponent} from 'vue';
import {useBreadcrumbs} from '@mptheme/client/composables/useBreadcrumbs';

export default defineComponent({
  name: 'RouteBreadcrumbs',
  components: {ContentContainer, ContentBlock, AutoLink, Icon},

  setup: () => ({
    breadcrumbs: useBreadcrumbs(),
  }),
});
</script>
