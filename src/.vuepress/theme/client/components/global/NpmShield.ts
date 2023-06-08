/* eslint-disable @typescript-eslint/naming-convention */
import {FunctionalComponent, h} from 'vue';
import Shield, {ShieldParameters} from '@mptheme/client/components/global/Shield';

interface Props extends ShieldParameters {
  package: string;
  alt?: string;
  type?: string;
  tag?: string;
}

const NpmShield: FunctionalComponent<Props> = (props) => {
  return h(Shield, {
    href: `https://npmjs.com/package/${props.package}${props.tag ? `/${props.tag}` : ''}`,
    path: `npm/${props.type ?? 'v'}/${props.package}`,
    alt: props.alt ?? `Latest version of ${props.package} on npm`,
    color: props.color ?? 'CC3534',
    logo: props.logo ?? 'npm',
    label: props.label ?? 'npm',
    logoColor: props.logoColor ?? 'FFFFFF',
  });
};

export default NpmShield;
