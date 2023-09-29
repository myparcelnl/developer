import {type Ref, ref} from 'vue';
import data from '../../../integrations.json';

type UseIntegrations = () => Ref<IntegrationDefinition[]>;

export interface IntegrationDefinition {
  name: string;
  title: string;
  type: 'plugin' | 'other' | 'sdk';
  image: string;
  internal: boolean;
  url?: string;
  repository?: string;
  documentation?: string;
  classes?: string;
}

const DEFAULTS: Partial<IntegrationDefinition> = {
  classes: undefined,
  documentation: undefined,
  image: undefined,
  internal: false,
  repository: undefined,
  url: undefined,
  title: '',
  type: 'other',
};

let integrations: Ref<IntegrationDefinition[]>;

const getIntegrationData = () => {
  return (data as unknown as IntegrationDefinition[]).map((item) => ({
    ...DEFAULTS,
    ...item,
  }));
};

export const useIntegrations: UseIntegrations = () => {
  integrations ??= ref(getIntegrationData());

  return integrations;
};
