import {type FunctionalComponent, h} from 'vue';
import MPImg from '@mptheme/client/components/global/MPImg.vue';
import AutoLink from '@mptheme/client/components/global/AutoLink.vue';

const BASE_URL = 'https://img.shields.io/';

export interface ShieldParameters {
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

// eslint-disable-next-line @typescript-eslint/naming-convention
const Shield: FunctionalComponent<Props> = (props) => {
  const parameters: ShieldParameters = {...defaults};

  Object.entries(props).forEach(([key, value]) => {
    if (['href', 'alt', 'path'].includes(key) || !value) {
      return;
    }

    parameters[key as keyof ShieldParameters] = value;
  });

  const params = new URLSearchParams(parameters as Required<ShieldParameters>);

  const image = h(MPImg, {
    src: `${BASE_URL}${props.path}?${params}`,
    alt: props.alt ?? '',
    class: 'rounded-sm overflow-hidden',
  });

  if (props.href) {
    return h(AutoLink, {item: props.href}, () => image);
  }

  return image;
};

export default Shield;
