import {Plugin} from 'vuepress';
import {createBottomFooter} from '../../../config/createBottomFooter';
import {createFooter} from '../../../config/createFooter';
import {createNavbar} from '../../../config/createNavbar';
import {createSidebar} from '../../../config/sidebar/createSidebar';
import {merge} from 'lodash-unified';
import {getLocalePathPrefix} from '../../parseTranslations/node';
