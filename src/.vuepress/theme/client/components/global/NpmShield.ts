import {FunctionalComponent, h} from 'vue';
import Shield from '@mptheme/client/components/global/Shield';

export interface Props {
  package: string;
  alt: string;
  type?: string;
}

const NpmShield: FunctionalComponent<Props> = (props) => {
  return h(Shield, {
    alt: props.alt,
    href: `https://npmjs.com/package/${props.package}`,
    path: `npm/${props.type ?? 'v'}/${props.package}`,
    color: 'CC3534',
    logo: 'npm',
  });
};

export default NpmShield;
