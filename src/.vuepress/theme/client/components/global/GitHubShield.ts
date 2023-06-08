/* eslint-disable @typescript-eslint/naming-convention */
import {FunctionalComponent, h} from 'vue';
import Shield, {ShieldParameters} from '@mptheme/client/components/global/Shield';
import {toArray} from '@mptheme/client/utils/toArray';

export enum GitHubLinkType {
  Pulls = 'pulls',
  Issues = 'issues',
  Releases = 'releases',
}

interface Props extends ShieldParameters {
  alt: string;
  repo: string;
  link: OneOrMore<GitHubLinkType>;
}

interface GitHubShieldType {
  label: string;
  link: GitHubLinkType;
  name: string;
}

const types: GitHubShieldType[] = [
  {
    label: 'pull requests',
    link: GitHubLinkType.Pulls,
    name: 'issues-pr',
  },
  {
    label: 'issues',
    link: GitHubLinkType.Issues,
    name: 'issues',
  },
  {
    label: 'releases',
    link: GitHubLinkType.Releases,
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
      alt: `${props.repo} ${type.label} on GitHub`,
      logo: props.logo ?? 'github',
      label: props.label ?? type.label,
      logoColor: props.logoColor ?? 'FFFFFF',
    });
  });
};

export default GitHubShield;
