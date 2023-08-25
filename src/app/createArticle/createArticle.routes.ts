import { Route } from '@angular/router';
import { CreateArticleComponenet } from './components/createArticle.component';
import { provideEffects } from '@ngrx/effects';
import * as createArticleEffects from './store/effects';
import { provideState } from '@ngrx/store';
import { createArticleFeatureKey, createArticleReducer } from './store/reducer';

export const createArticleRoutes: Route[] = [
  {
    path: '',
    component: CreateArticleComponenet,
    providers: [
      provideEffects(createArticleEffects),
      provideState(createArticleFeatureKey, createArticleReducer),
    ],
  },
];
