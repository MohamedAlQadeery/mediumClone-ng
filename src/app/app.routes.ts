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
    path: 'feed',
    loadChildren: () =>
      import('src/app/yourFeed/yourFeed.routes').then((m) => m.yourFeedRoutes),
  },
  {
    path: 'tag/:tagName',
    loadChildren: () =>
      import('src/app/tagFeed/tagFeed.routes').then((m) => m.tagFeedRoutes),
  },
  {
    path: 'articles/new',
    loadChildren: () =>
      import('src/app/createArticle/createArticle.routes').then(
        (m) => m.createArticleRoutes
      ),
  },
  {
    path: 'articles/:id',
    loadChildren: () =>
      import('src/app/articleDetails/articleDetails.routes').then(
        (m) => m.routes
      ),
  },
];
