<template>
  <div>
    <div class="border flex flex-col overflow-hidden rounded-lg">
      <div
        v-if="image"
        class="flex h-32 px-3 py-5"
        :class="[
          classes,
          {
            'bg-white': !classes,
          },
        ]">
        <MPImg
          :src="`/integrations/${image}`"
          role="none"
          class="m-auto max-h-full"
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
          <Icon icon="integrations" />
          <AutoLink :item="`https://github.com/${repo}`">
            View on GitHub
          </AutoLink>
        </div>

        <div v-if="url">
          <Icon icon="integrations" />
          <AutoLink :item="url">
            Documentation
          </AutoLink>
        </div>
      </div>
    </div>
  </div>
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
