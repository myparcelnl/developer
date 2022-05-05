import { FunctionalComponent, h } from 'vue';
import Shield from '@mptheme/client/components/global/Shield';

interface Props {
  alt: string;
  package: string;
}

const PackagistBadge: FunctionalComponent<Props> = (props) => {
  return h(Shield, {
    alt: props.alt,
    href: `https://packagist.org/packages/${props.package}`,
    path: `packagist/v/${props.package}?color=f28d1a&logo=packagist`,
  });
};

export default PackagistBadge;
