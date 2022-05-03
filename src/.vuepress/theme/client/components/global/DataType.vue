<template>
  <code>
    <AutoLink
      :item="linkItem"
      :class="classes">
      {{ text }}
    </AutoLink>
  </code>
</template>

<script lang="ts">
import { DataType, useDataTypes } from '@mptheme/client/composables/useDataTypes';
import { computed, defineComponent, ref } from 'vue';
import AutoLink from '@mptheme/client/components/global/AutoLink.vue';
import { NavbarItem } from '@vuepress/theme-default/lib/shared';

export default defineComponent({
  name: 'DataType',
  components: { AutoLink },
  props: {
    type: {
      type: String,
      required: true,
    },

    id: {
      type: [Number, String],
      default: null,
    },

    name: {
      type: String,
      default: null,
    },
  },

  setup: (props) => {
    const dataTypes = useDataTypes();
    const classes = ref<string[]>([]);

    const dataType = computed<DataType | null>(() => {
      return dataTypes.find((type) => type.name === props.type) ?? null;
    });

    const childType = computed<DataType['children'][number] | null>(() => {
      return dataType.value?.children.find((child) => child.ID === Number(props.id) || child?.NAME === props.name) ?? null;
    });

    const text = computed<string>(() => {
      const child = childType.value;
      return `${dataType.value?.name} ${child?.ID} (${child?.HUMAN ?? child?.NAME})`.trim();
    });

    const linkItem: NavbarItem = {
      link: `/api-reference/04.data-types#${dataType.value?.name}`,
      text: text.value,
    };

    return {
      text,
      classes,
      linkItem,
    };
  },
});
</script>
