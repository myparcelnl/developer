import { defineVariant } from '../defineVariant';

export const iconVariant = defineVariant('icon',
  {
    'api-reference': 'icon-api-reference',
    'chevron-left': ['icon-chevron-right', 'transform', 'rotate-180'],
    'chevron-right': 'icon-chevron-right',
    documentation: 'icon-documentation',
    integrations: 'icon-integrations',
  },
  {
    required: true,
  });
