<template>
  <component
    :is="link ? 'AutoLink' : 'div'"
    :item="link">
    <div class="border flex flex-col overflow-hidden rounded-lg">
      <div
        v-if="img"
        class="flex grow px-3 py-5"
        :class="[
          classes,
          {
            'bg-white': !classes,
          },
        ]">
        <MPImg
          class="grow h-24"
          :src="`/integrations/${img}`"
          role="none"
          :alt="`${title} image`" />
      </div>

      <div class="border-t dark:bg-zinc-800 p-3 shadow">
        <span
          class="font-bold"
          v-text="title" />
        <br>
        <span
          v-if="type"
          v-text="type" />

        <div v-if="repo">
          <Icon icon="github" />
          <AutoLink :item="`https://github.com/${repo}`">
            View on GitHub
          </AutoLink>
        </div>

        <div v-if="docs">
          <Icon icon="integrations" />
          <AutoLink :item="docs">
            Documentation
          </AutoLink>
        </div>
      </div>
    </div>
  </component>
</template>

<script lang="ts">
import AutoLink from '@mptheme/client/components/global/AutoLink.vue';
import Icon from '@mptheme/client/components/common/icon/Icon.vue';
import MPImg from '@mptheme/client/components/global/MPImg.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Integration',
  components: {
    AutoLink,
    Icon,
    MPImg,
  },

  props: {
    title: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      default: null,
    },

    repo: {
      type: String,
      default: null,
    },

    docs: {
      type: String,
      default: null,
    },

    link: {
      type: String,
      default: null,
    },

    img: {
      type: String,
      default: null,
    },

    classes: {
      type: String,
      default: null,
    },
  },
});
</script>
