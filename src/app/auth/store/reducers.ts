import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';
import { authActions } from './actions';

const initalSate: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: undefined,
  ValidatonErrors: null,
};

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initalSate,
    on(authActions.register, (state) => ({
      ...state,
      isSubmitting: true,
      ValidatonErrors: null,
    })),
    on(authActions.registerSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
    })),
    on(authActions.registerFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      ValidatonErrors: action.errorResponse,
    }))
  ),
});

export const {
  name: AuthFeatureKey,
  reducer: AuthFeatureReducer,
  selectIsSubmitting,
} = authFeature;
