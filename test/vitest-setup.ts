import { config } from '@vue/test-utils';
import { testIdPlugin } from './vue-test-utils/testIdPlugin';

config.plugins.VueWrapper.install(testIdPlugin)
