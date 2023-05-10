<template>
  <div class="flex flex-col sm:flex-row">
    <label
      v-if="label"
      :for="id"
      class="block sm:w-1/3">
      {{ label }}
    </label>
    <div
      class="sm:w-2/3"
      :class="{
        'sm:ml-auto ml-0': !label,
      }">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'FormField',
  props: {
    id: {
      type: String,
      default: '',
    },

    label: {
      type: String,
      default: '',
    },
  },
});
</script>
