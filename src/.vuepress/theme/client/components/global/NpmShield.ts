/* eslint-disable @typescript-eslint/naming-convention */
import { FunctionalComponent, h } from 'vue';
import Shield, { ShieldParameters } from '@mptheme/client/components/global/Shield';

export interface Props extends ShieldParameters{
  package: string;
  alt: string;
  type?: string;
}

const NpmShield: FunctionalComponent<Props> = (props) => {
  return h(Shield, {
    href: `https://npmjs.com/package/${props.package}`,
    path: `npm/${props.type ?? 'v'}/${props.package}`,
    alt: props.alt,
    color: props.color ?? 'CC3534',
    logo: props.logo ?? 'npm',
    label: props.label ?? 'Packagist',
    logoColor: props.logoColor ?? 'FFFFFF',
  });
};

export default NpmShield;
