import { createFeature, createReducer, on } from '@ngrx/store';
import { ArticleDetailsStateInterface } from '../types/articleDetailsState.interface';
import { articleDetailsActions } from './actions';
import { routerNavigationAction } from '@ngrx/router-store';

const initalState: ArticleDetailsStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const articleDetailsFeature = createFeature({
  name: 'articleDetails',
  reducer: createReducer(
    initalState,
    on(articleDetailsActions.getArticleDetails, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(articleDetailsActions.getArticleDetailsSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.article,
    })),
    on(articleDetailsActions.getArticleDetailsFailure, (state) => ({
      ...state,
      isLoading: false,
    })),
    on(routerNavigationAction, () => initalState)
  ),
});

export const {
  name: articleDetailsFeatureKey,
  reducer: articleDetailsReducer,
  selectData: selectArticleData,
  selectError,
  selectIsLoading,
} = articleDetailsFeature;
