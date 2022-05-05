import { FunctionalComponent, h } from 'vue';
import Shield from '@mptheme/client/components/global/Shield';
import { toArray } from '@mptheme/client/utils/toArray';

type Link = 'pulls' | 'issues' | 'releases';

interface Props {
  alt: string;
  repo: string;
  link: OneOrMore<Link>;
}

const types = [
  {
    alt: 'pull requets',
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

const GitHubBadge: FunctionalComponent<Props> = (props) => {
  const links = toArray(props.link ?? 'releases');

  return links.map((link) => {
    const type = types.find((type) => type.link === link);

    if (!type) {
      return null;
    }

    return h(Shield, {
      alt: props.repo + ' ' + type.alt + ' on GitHub',
      href: `https://github.com/${props.repo}/${type.link}`,
      path: `github/${type.name}/${props.repo}?color=4183C4&logo=github`,
    });
  });
};

export default GitHubBadge;
