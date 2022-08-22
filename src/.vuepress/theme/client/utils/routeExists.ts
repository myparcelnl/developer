import { Router, useRouter } from 'vue-router';
import { memoize } from 'lodash-unified';

let routes: ReturnType<Router['getRoutes']>;

const routeExistsMemoized = memoize((path: string) => {
  routes ??= useRouter().getRoutes();

  const variants: string[] = [path];

  if (path.endsWith('/')) {
    const plain = path.substring(0, path.length - 1);
    variants.unshift(plain);
    variants.unshift(plain + '/index.html');
  }

  if (path.endsWith('.html')) {
    variants.unshift(path.replace('.html', ''));
  }

  return routes.some((route) => variants.includes(route.path));
});

export const routeExists = (path: string): boolean => routeExistsMemoized(path);
