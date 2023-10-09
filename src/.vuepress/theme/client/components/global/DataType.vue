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
import {computed, defineComponent, ref} from 'vue';
import {isOfType} from '@mptheme/shared/utils';
import {type MyPaNavbarItem} from '@mptheme/config.types';
import {
  type DataTypeGroup,
  type DataTypeWithId,
  type DataTypeWithName,
  useDataTypes,
} from '@mptheme/client/composables/useDataTypes';
import AutoLink from '@mptheme/client/components/global/AutoLink.vue';

export default defineComponent({
  name: 'DataType',
  components: {AutoLink},
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

    const dataType = computed<DataTypeGroup | null>(() => {
      return dataTypes.find((type) => type.name === props.type) ?? null;
    });

    const childType = computed<DataTypeGroup['children'][number] | null>(() => {
      return (
        dataType.value?.children.find((child) => {
          if (props.id && isOfType<DataTypeWithId>(child, 'ID')) {
            return child.ID === Number(props.id);
          } else if (props.name && isOfType<DataTypeWithName>(child, 'NAME')) {
            return child.NAME === props.name;
          }

          // eslint-disable-next-line no-console
          console.warn(`Data type for id: ${props.id} and/or name ${props.name} could not be found.`);

          return false;
        }) ?? null
      );
    });

    const text = computed<string>(() => {
      const child = childType.value;
      const id = isOfType<DataTypeWithId>(child, 'ID') ? child.ID : child?.NAME;
      const human = child?.HUMAN ? `(${child.HUMAN})` : '';

      return `${dataType.value?.name} ${id} ${human}`.trim();
    });

    const linkItem: MyPaNavbarItem = {
      link: `/api-reference/04.data-types.html#${dataType.value?.name}`,
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
