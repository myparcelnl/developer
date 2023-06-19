<template>
  <CodeGroup
    v-model="activeItem"
    :items="items" />
</template>

<script lang="ts" setup>
import CodeGroup from './CodeGroup.vue';
import {computed} from 'vue';
import {useGlobalPackageManager} from '../../composables/state/useGlobalPackageManager';

const props = defineProps<{
  package: string;
  dev?: boolean;
}>();

const types = [
  {
    name: 'npm',
    install: 'npm install',
    dev: '--save-dev',
  },
  {
    name: 'yarn',
    install: 'yarn add',
    dev: '-D',
  },
  {
    name: 'pnpm',
    install: 'pnpm add',
    dev: '-D',
  },
];

const items = types.map((type) => {
  const dev = props.dev ? `${type.dev} ` : '';

  return {
    title: type.name,
    language: 'bash',
    code: `${type.install} ${dev}${props.package}`,
  };
});

const packageManager = useGlobalPackageManager();

const activeItem = computed({
  get() {
    const index = types.findIndex((type) => type.name === packageManager.value);

    return index === -1 ? 0 : index;
  },

  set(value: number) {
    packageManager.value = types[value].name;
  },
});
</script>
