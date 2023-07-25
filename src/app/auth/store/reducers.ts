import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';
import { authActions } from './actions';
import { routerNavigationAction } from '@ngrx/router-store';

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
    })),
    on(authActions.login, (state) => ({
      ...state,
      isSubmitting: true,
      ValidatonErrors: null,
    })),
    on(authActions.loginSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
    })),
    on(authActions.loginFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      ValidatonErrors: action.errorResponse,
    })),
    on(authActions.getCurrentUser, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(authActions.getCurrentUserSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      currentUser: action.currentUser,
    })),
    on(authActions.getCurrentUserFailed, (state, action) => ({
      ...state,
      isLoading: false,
      currentUser: null,
    })),
    on(routerNavigationAction, (state) => ({ ...state, ValidatonErrors: null }))
  ),
});

export const {
  name: AuthFeatureKey,
  reducer: AuthFeatureReducer,
  selectIsSubmitting,
  selectValidatonErrors,
  selectCurrentUser,
  selectIsLoading,
} = authFeature;
