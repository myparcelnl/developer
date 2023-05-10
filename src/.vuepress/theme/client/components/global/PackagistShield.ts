/* eslint-disable @typescript-eslint/naming-convention */
import { FunctionalComponent, h } from 'vue';
import Shield, { ShieldParameters } from '@mptheme/client/components/global/Shield';

interface Props extends ShieldParameters {
  alt: string;
  package: string;
  type?: string;
}

const PackagistShield: FunctionalComponent<Props> = (props) => {
  return h(Shield, {
    href: `https://packagist.org/packages/${props.package}`,
    path: `packagist/${props.type ?? 'v'}/${props.package}`,
    alt: props.alt,
    color: props.color ?? 'F28D1A',
    label: props.label ?? 'Packagist',
    labelColor: props.labelColor ?? 'FFFFFF',
    logo: props.logo ?? 'packagist',
    logoColor: props.logoColor ?? 'FFFFFF',
  });
};

export default PackagistShield;
