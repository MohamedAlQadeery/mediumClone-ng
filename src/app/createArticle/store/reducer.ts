import { createFeature, createReducer, on } from '@ngrx/store';
import { CreateArticleStateInterface } from '../types/createArticleState.interface';
import { createArticleActions } from './actions';
import { routerNavigationAction } from '@ngrx/router-store';

const initalState: CreateArticleStateInterface = {
  isSubmitting: false,
  errors: null,
};

const createArticleFeature = createFeature({
  name: 'createArticle',
  reducer: createReducer(
    initalState,
    on(createArticleActions.createArticle, (state) => ({
      ...state,
      isSubmitting: true,
    })),
    on(createArticleActions.createArticleSuccess, (state) => ({
      ...state,
      isSubmitting: false,
    })),
    on(createArticleActions.createArticleFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      errors: action.errors,
    })),
    on(routerNavigationAction, () => initalState)
  ),
});

export const {
  name: createArticleFeatureKey,
  reducer: createArticleReducer,
  selectErrors,
  selectIsSubmitting,
} = createArticleFeature;
