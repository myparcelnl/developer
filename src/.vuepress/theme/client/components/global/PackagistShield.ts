/* eslint-disable @typescript-eslint/naming-convention */
import {type FunctionalComponent, h} from 'vue';
import Shield, {type ShieldParameters} from '@mptheme/client/components/global/Shield';

interface Props extends ShieldParameters {
  alt: string;
  package: string;
  type?: string;
}

const PackagistShield: FunctionalComponent<Props> = (props) => {
  return h(Shield, {
    href: `https://packagist.org/packages/${props.package}`,
    path: `packagist/${props.type ?? 'v'}/${props.package}`,
    alt: props.alt ?? `Latest version of ${props.package} on Packagist`,
    color: props.color ?? '787CB5',
    label: props.label ?? 'packagist',
    labelColor: props.labelColor,
    logo: props.logo ?? 'packagist',
    logoColor: props.logoColor ?? 'FFFFFF',
  });
};

export default PackagistShield;
