import { createFeature, createReducer, on } from '@ngrx/store';
import { PopularTagStateInterface } from '../types/popularTagState.interface';
import { popluarTagsActions } from './actions';
import { routerNavigationAction } from '@ngrx/router-store';

const initialState: PopularTagStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const popularTagsFeature = createFeature({
  name: 'popularTags',
  reducer: createReducer(
    initialState,
    on(popluarTagsActions.getPopularTags, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(popluarTagsActions.getPopularTagsSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.popularTags,
    })),
    on(popluarTagsActions.getPopularTagsFailure, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.errorResponse,
    })),
    on(routerNavigationAction, () => initialState)
  ),
});

export const {
  name: popularTagsFeatureKey,
  reducer: popularTagsReducer,
  selectIsLoading,
  selectError,
  selectData,
} = popularTagsFeature;
