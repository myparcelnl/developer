/* eslint-disable @typescript-eslint/naming-convention */
import { FunctionalComponent, h } from 'vue';
import Shield, { ShieldParameters } from '@mptheme/client/components/global/Shield';
import { toArray } from '@mptheme/client/utils/toArray';

type Link = 'pulls' | 'issues' | 'releases';

interface Props extends ShieldParameters {
  alt: string;
  repo: string;
  link: OneOrMore<Link>;
}

const types = [
  {
    alt: 'pull requests',
    link: 'pulls',
    name: 'issues-pr',
  },
  {
    alt: 'issues',
    link: 'issues',
    name: 'issues',
  },
  {
    alt: 'releases',
    link: 'releases',
    name: 'v/release',
  },
];

const GitHubShield: FunctionalComponent<Props> = (props) => {
  const links = toArray(props.link ?? 'releases');

  return links.map((link) => {
    const type = types.find((type) => type.link === link);

    if (!type) {
      return null;
    }

    return h(Shield, {
      href: `https://github.com/${props.repo}/${type.link}`,
      path: `github/${type.name}/${props.repo}`,
      alt: `${props.repo} ${type.alt} on GitHub`,
      color: props.color ?? 'F28D1A',
      logo: props.logo ?? 'github',
      label: props.label ?? 'Packagist',
      logoColor: props.logoColor ?? 'FFFFFF',
    });
  });
};

export default GitHubShield;
