import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'register',
    loadChildren: () =>
      import('src/app/auth/auth.routes').then((m) => m.registerRoutes),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('src/app/auth/auth.routes').then((m) => m.loginRoutes),
  },

  {
    path: '',
    loadChildren: () =>
      import('src/app/globalFeed/globalFeed.routes').then(
        (m) => m.globalFeedRoutes
      ),
  },
  {
    path: 'tag/:tagName',
    loadChildren: () =>
      import('src/app/tagFeed/tagFeed.routes').then((m) => m.tagFeedRoutes),
  },
];
