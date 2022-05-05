import { FunctionalComponent, h } from 'vue';
import Shield from '@mptheme/client/components/global/Shield';

export interface Props {
  package: string;
  alt: string;
}

const NpmBadge: FunctionalComponent<Props> = (props) => {
  return h(Shield, {
    alt: props.alt,
    href: `https://npmjs.com/package/${props.package}`,
    path: `npm/v/${props.package}?color=CC3534&logo=npm`,
  });
};

export default NpmBadge;
