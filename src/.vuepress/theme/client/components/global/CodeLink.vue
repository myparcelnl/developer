<template>
  <code>
    <AutoLink :item="item" />
  </code>
</template>

<script setup lang="ts">
import AutoLink from './AutoLink.vue';
import {MyPaNavLink} from '../../../config.types';
import {computed} from 'vue';

const props = defineProps<{
  to: string;
}>();

// if namespace starts with \MyParcelNL\Pdk, repository is myparcelnl/pdk

const namespaceMap = {
  'MyParcelNL\\Pdk\\': 'myparcelnl/pdk',
  'MyParcelNL\\Shopware\\': 'myparcelnl/shopware',
  'MyParcelNL\\WooCommerce\\': 'myparcelnl/woocommerce',
  'MyParcelNL\\Magento\\': 'myparcelnl/magento',
  'MyParcelNL\\PrestaShop\\': 'myparcelnl/prestashop',
};

const resolveCodeLink = (to: string) => {
  const parts = to.split('\\');
  const namespace = parts.slice(0, -1).join('\\');

  const repository = namespaceMap[namespace];

  if (!repository) {
    return to;
  }

  return `https://github.com/${repository}/blob/main/${parts[parts.length - 1]}.php`;
};

const item = computed<MyPaNavLink>(() => {
  return {
    title: props.to,
    path: resolveCodeLink(props.to),
  };
});
</script>
