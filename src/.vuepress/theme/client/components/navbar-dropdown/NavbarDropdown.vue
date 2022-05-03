<template>
  <div
    class="relative"
    @mouseleave="open = false">
    <button
      type="button"
      :aria-label="dropdownAriaLabel"
      class="flex"
      @click="handleDropdown"
      @mouseenter="open = true">
      <span v-text="item.text" />
      <ToggleChevron :toggle="open" />
    </button>

    <div
      v-show="open"
      class="absolute bg-white border p-3 right-0 rounded-lg top-full">
      <ul>
        <li
          v-for="child in item.children"
          :key="child.text">
          <template v-if="child.children">
            <h4>
              <AutoLink
                v-if="child.link"
                :item="child"
                @focusout="
                  isLastItemOfArray(child, item.children)
                    && child.children.length === 0
                    && (open = false)
                " />

              <span v-else>{{ child.text }}</span>
            </h4>

            <ul>
              <li
                v-for="grandchild in child.children"
                :key="grandchild.link">
                <AutoLink
                  :item="grandchild"
                  @focusout="
                    isLastItemOfArray(grandchild, child.children)
                      && isLastItemOfArray(child, item.children)
                      && (open = false)
                  " />
              </li>
            </ul>
          </template>

          <template v-else>
            <AutoLink
              :item="child"
              @focusout="
                isLastItemOfArray(child, item.children) && (open = false)
              " />
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { NavbarItem, ResolvedNavbarItem } from '@mptheme/config.types';
import { PropType, computed, defineComponent, ref, watch } from 'vue';
import ToggleChevron from '@mptheme/client/components/common/ToggleChevron.vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'NavbarDropdown',
  components: { ToggleChevron },
  props: {
    item: {
      type: Object as PropType<Exclude<ResolvedNavbarItem, NavbarItem>>,
      required: true,
    },

    isHeader: {
      type: Boolean,
    },
  },

  setup: (props) => {
    const open = ref(false);
    const route = useRoute();

    const dropdownAriaLabel = computed(
      () => props.item.ariaLabel || props.item.text,
    );

    watch(
      () => route.path,
      () => {
        open.value = false;
      },
    );

    /**
     * Open the dropdown when user tab and click from keyboard.
     *
     * Use event.detail to detect tab and click from keyboard.
     * The Tab + Click is UIEvent > KeyboardEvent, so the detail is 0.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail
     */
    const handleDropdown = (e: KeyboardEvent): void => {
      const isTriggeredByTab = e.detail === 0;

      if (isTriggeredByTab || props.isHeader) {
        open.value = !open.value;
      } else {
        open.value = false;
      }
    };
    const isLastItemOfArray = (item: unknown, arr: unknown[]): boolean => arr[arr.length - 1] === item;

    return {
      dropdownAriaLabel,
      handleDropdown,
      isLastItemOfArray,
      open,
    };
  },
});
</script>
