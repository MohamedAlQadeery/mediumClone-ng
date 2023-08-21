import { Route } from '@angular/router';
import { ArticleDetailsComponent } from './components/articleDetails.component';
import * as articleDetailsEffects from './store/effects';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import {
  articleDetailsFeatureKey,
  articleDetailsReducer,
} from './store/reducer';
export const routes: Route[] = [
  {
    path: '',
    component: ArticleDetailsComponent,
    providers: [
      provideEffects(articleDetailsEffects),
      provideState(articleDetailsFeatureKey, articleDetailsReducer),
    ],
  },
];
