<template>
  <code
    :class="classes"
    v-text="text" />
</template>

<script lang="ts">
import {computed, defineComponent, ref} from 'vue';
import {useHttpCodes} from '@mptheme/client/composables/useHttpCodes';

export default defineComponent({
  name: 'Http',
  props: {
    code: {
      type: [Number, String],
      required: true,
    },
  },

  setup: (props) => {
    const {findByCode} = useHttpCodes();
    const classes = ref<string[]>([]);

    const text = computed<string>(() => {
      return `HTTP ${props.code} ${findByCode(Number(props.code))?.text ?? ''}`.trim();
    });

    switch (props.code?.toString().slice(0, 1)) {
      case '2':
        classes.value.push('text-emerald-400');
        break;
      case '3':
        classes.value.push('text-amber-400');
        break;
      case '4':
        classes.value.push('text-rose-400');
        break;
      case '5':
        classes.value.push('text-red-500');
        break;
    }

    return {
      text,
      classes,
    };
  },
});
</script>
