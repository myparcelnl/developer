<template>
  <div>
    <div class="flex flex-col overflow-hidden rounded-lg border">
      <div
        v-if="image"
        class="flex h-32 px-3 py-5"
        :class="[
          classes,
          {
            'bg-white': !classes,
          },
        ]">
        <MyPaImage
          :src="`/integrations/${image}`"
          role="none"
          :alt="`${name} image`" />
      </div>

      <div class="bg-white dark:bg-zinc-800 p-3 shadow">
        <span
          class="font-bold"
          v-text="name" />
        <br>
        <span
          v-if="type"
          v-text="type" />

        <div v-if="repo">
          <MyPaIcon icon="integrations" />
          <AutoLink :item="{ link: `https://github.com/${repo}` }">
            View on GitHub
          </AutoLink>
        </div>

        <div v-if="url">
          <MyPaIcon icon="integrations" />
          <AutoLink :item="{ link: url }">
            Documentation
          </AutoLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AutoLink from '@mptheme/client/components/auto-link/AutoLink.vue';
import MyPaIcon from '@mptheme/client/components/common/icon/Icon.vue';
import MyPaImage from '@mptheme/client/components/common/Image.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Integration',
  components: {
    MyPaImage,
    AutoLink,
    MyPaIcon,
  },

  props: {
    name: {
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

    url: {
      type: String,
      default: null,
    },

    image: {
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
