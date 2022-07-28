import { LocaleConfig } from 'vuepress';
import { createBottomFooter } from '../../../config/createBottomFooter';
import { createFooter } from '../../../config/createFooter';
import { createNavbar } from '../../../config/createNavbar';
import { createSidebar } from '../../../config/sidebar/createSidebar';

const PREFIX_NL = '/nl';
const sidebar = createSidebar();

export const getThemeConfigLocales = (): LocaleConfig => ({
  '/': {
    selectLanguageName: 'English',
    navbar: createNavbar(),
    sidebar,
    footer: createFooter(),
    footer2: createBottomFooter(),
  },
  '/nl/': {
    selectLanguageName: 'Nederlands',
    navbar: createNavbar(PREFIX_NL),
    sidebar,
    footer: createFooter(PREFIX_NL),
    footer2: createBottomFooter(),
  },
});
