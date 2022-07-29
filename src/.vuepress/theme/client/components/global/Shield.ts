import { FunctionalComponent, h } from 'vue';
import AutoLink from '@mptheme/client/components/global/AutoLink.vue';
import MPImg from '@mptheme/client/components/global/MPImg.vue';

const BASE_URL = 'https://img.shields.io/';

interface ShieldParameters {
  color?: string;
  label?: string;
  labelColor?: string;
  logo?: string;
  logoColor?: string;
  style?: string;
}

interface Props extends ShieldParameters {
  href?: string;
  alt: string;
  path: string;
}

const defaults: ShieldParameters = Object.freeze({
  labelColor: '27272A',
  logoColor: 'FFFFFF',
  style: 'for-the-badge',
});

const Shield: FunctionalComponent<Props> = (props) => {
  const parameters: ShieldParameters = { ...defaults };

  Object.entries(props).forEach(([k, v]) => {
    if (['href', 'alt', 'path'].includes(k) || !v) {
      return;
    }

    parameters[k as keyof ShieldParameters] = v;
  });

  const params = new URLSearchParams(parameters as Required<ShieldParameters>);

  const image = h(MPImg, {
    src: `${BASE_URL}${props.path}?${params}`,
    alt: props.alt ?? '',
    class: 'rounded-sm overflow-hidden h-7',
  });

  if (props.href) {
    return h(AutoLink, { item: props.href }, () => image);
  }

  return image;
};

export default Shield;
