<template>
  <div
    class="inline-flex relative"
    @mouseleave="open = false">
    <MPButton
      :aria-label="dropdownAriaLabel"
      variant="outlineGray"
      v-bind="buttonAttributes"
      @click="handleDropdown"
      @mouseenter="open = true">
      <slot
        v-if="!buttonAttributes.icon"
        name="current"
        :item="item"
        :open="open">
        <span v-text="item.text" />
        <ToggleChevron :toggle="open" />
      </slot>
    </MPButton>

    <div
      v-show="open"
      class="absolute bg-white border dark:bg-zinc-900 p-3 right-0 rounded-lg top-full">
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
                ">
                <slot
                  name="child"
                  :item="child" />
              </AutoLink>

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
                  ">
                  <slot
                    name="child"
                    :item="grandchild" />
                </AutoLink>
              </li>
            </ul>
          </template>

          <template v-else>
            <AutoLink
              :item="child"
              @focusout="isLastItemOfArray(child, item.children) && (open = false)">
              <slot
                name="child"
                :item="child" />
            </AutoLink>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { MyPaNavbarItem, MyPaResolvedNavbarItem } from '@mptheme/config.types';
import { PropType, computed, defineComponent, ref, watch } from 'vue';
import ToggleChevron from '@mptheme/client/components/common/ToggleChevron.vue';
import { useRoute } from 'vue-router';
import MPButton from '@mptheme/client/components/common/button/MPButton.vue';

export default defineComponent({
  name: 'NavbarDropdown',
  components: { MPButton, ToggleChevron },
  props: {
    item: {
      type: Object as PropType<Exclude<MyPaResolvedNavbarItem, MyPaNavbarItem>>,
      required: true,
    },

    buttonAttributes: {
      type: Object,
      default: null,
    },
  },

  setup: (props) => {
    const open = ref(false);
    const route = useRoute();
    const dropdownAriaLabel = computed(() => props.item.ariaLabel ?? props.item.text);

    watch(() => route.path, () => {
      open.value = false;
    });

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

      if (isTriggeredByTab) {
        open.value = !open.value;
      } else {
        open.value = true;
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
