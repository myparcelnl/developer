import { FunctionalComponent, h } from 'vue';
import AutoLink from '@mptheme/client/components/global/AutoLink.vue';
import MPImg from '@mptheme/client/components/global/MPImg.vue';

const BASE_URL = 'https://img.shields.io/';

interface Props {
  href?: string;
  alt: string;
  path: string;
}

const Shield: FunctionalComponent<Props> = (props) => {
  const image = h(MPImg, {
    src: `${BASE_URL}${props.path}&style=for-the-badge&labelColor=27272A&logoColor=FFFFFF`,
    alt: props.alt,
    class: 'rounded',
  });

  if (props.href) {
    return h(AutoLink, { item: props.href }, () => image);
  }

  return image;
};

export default Shield;
