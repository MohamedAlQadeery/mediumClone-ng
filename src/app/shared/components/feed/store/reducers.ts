import { createFeature, createReducer, on } from '@ngrx/store';
import { FeedStateInterface } from '../types/feedState.interface';
import { feedActions } from './actions';
import {
  routerNavigatedAction,
  routerNavigationAction,
} from '@ngrx/router-store';

const initalState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const feedFeature = createFeature({
  name: 'feed',
  reducer: createReducer(
    initalState,
    on(feedActions.getFeed, (state) => ({ ...state, isLoading: true })),
    on(feedActions.getFeedSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })),
    on(feedActions.getFeedFailure, (state) => ({ ...state, isLoading: false })),
    on(routerNavigationAction, () => initalState)
  ),
});

export const {
  name: feedFeatureKey,
  reducer: feedFeatureReducer,
  selectIsLoading: selectFeedIsLoading,
  selectError: selectFeedError,
  selectData: selectFeedData,
} = feedFeature;
