<template>
  <img
    :src="src"
    :alt="alt"
    @dragstart.prevent="null">
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MPImg',

  props: {
    src: {
      type: String,
      required: true,
    },

    alt: {
      type: String,
      required: true,
    },
  },
});
</script>
