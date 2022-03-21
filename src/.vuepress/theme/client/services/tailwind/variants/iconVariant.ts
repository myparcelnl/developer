import { defineVariant } from '../defineVariant';

export const iconVariant = defineVariant('icon',
  {
    'api-reference': 'icon-api-reference',
    'chevron-up': 'icon-chevron-up',
    'chevron-left': 'icon-chevron-left',
    'chevron-down': 'icon-chevron-down',
    'chevron-right': 'icon-chevron-right',
    documentation: 'icon-documentation',
    integrations: 'icon-integrations',
  },
  {
    required: true,
  });
