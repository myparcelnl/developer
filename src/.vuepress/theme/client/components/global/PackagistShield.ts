import { FunctionalComponent, h } from 'vue';
import Shield from '@mptheme/client/components/global/Shield';

interface Props {
  alt: string;
  package: string;
  type?: string;
}

const PackagistShield: FunctionalComponent<Props> = (props) => {
  return h(Shield, {
    alt: props.alt,
    href: `https://packagist.org/packages/${props.package}`,
    path: `packagist/${props.type ?? 'v'}/${props.package}`,
    color: 'f28d1a',
    logo: 'packagist',
  });
};

export default PackagistShield;
