import {useRoute} from 'vue-router';
import {type ComputedRef, computed} from 'vue';
import {usePageData} from '@vuepress/client';
import {type MyPaAnyNavbarItem} from '@mptheme/config.types';
import {useTranslate} from '@mptheme/client/composables/useTranslate';
import {useNavLink} from '@mptheme/client/composables/useNavLink';
import {useLanguage} from '@mptheme/client/composables/useLanguage';

export const useBreadcrumbs = (): ComputedRef<MyPaAnyNavbarItem[]> => {
  const route = useRoute();
  const page = usePageData();
  const translate = useTranslate();
  const language = useLanguage();

  return computed(() => {
    if (route.path === '/') {
      return [];
    }

    const prevPath = `/${route.path.split('/').filter(Boolean).slice(0, -1).join('/')}`;

    const breadcrumbs: MyPaAnyNavbarItem[] = [
      {
        text: translate('home'),
        link: language.current.value.path,
      },
    ];

    if (prevPath !== '/' && `${prevPath}/` !== language.current.value.path) {
      breadcrumbs.push(useNavLink(prevPath));
    }

    breadcrumbs.push({text: page.value.title});

    return breadcrumbs;
  });
};
