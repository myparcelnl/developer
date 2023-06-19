<template>
  <div>
    <ClientOnly>
      <ul class="!p-0 auto-cols-auto font-mono grid-flow-col inline-grid text-sm">
        <li
          v-for="(item, index) in items"
          :key="item.title"
          class="list-none">
          <button
            class="mr-1 overflow-hidden px-4 py-1 rounded-tl rounded-tr transition-colors"
            :class="{
              'dark:bg-zinc-700 bg-zinc-200 text-zinc-500': model !== index,
              'dark:bg-zinc-800 bg-zinc-100 text-goldfish-500': model === index,
            }"
            type="button"
            @click="model = index">
            <span>
              {{ item.title }}
            </span>
          </button>
        </li>
      </ul>
    </ClientOnly>

    <CodeBlock
      class="!rounded-tl-none"
      :code="selectedTab.code"
      :language="selectedTab.language" />
  </div>
</template>

<script setup lang="ts">
import CodeBlock from './CodeBlock.vue';
import {computed} from 'vue';
import {useVModel} from '@vueuse/core';

const props = defineProps<{
  items: {
    title: string;
    code: string;
    language: string;
  }[];

  // eslint-disable-next-line vue/no-unused-properties
  modelValue?: number;
}>();

const emit = defineEmits(['update:modelValue']);

const model = useVModel(props, 'modelValue', emit, {defaultValue: 0});

const selectedTab = computed(() => props.items[model.value ?? 0]);
</script>
