import { Ref, ref } from 'vue';
import data from '../../../../integrations.json';

type UseIntegrations = () => Ref<Integration[]>;

interface Integration {
  name: string;
  title: string;
  type: 'plugin' | 'other' | 'sdk';
  image: string;
  internal: boolean;
  repository?: string;
  documentation?: string;
  classes?: string;
}

const DEFAULTS: Partial<Integration> = {
  classes: undefined,
  documentation: undefined,
  image: undefined,
  internal: false,
  repository: undefined,
  title: '',
  type: 'other',
};

let integrations: Ref<Integration[]>;

export const useIntegrations: UseIntegrations = () => {
  const integrationData = (data as unknown as Integration[])
    .map((item) => ({
      ...DEFAULTS,
      ...item,
    }));

  integrations ??= ref(integrationData);

  return integrations;
};
