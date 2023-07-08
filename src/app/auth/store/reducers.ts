import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';
import { authActions } from './actions';

const initalSate: AuthStateInterface = {
  isSubmitting: false,
};

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initalSate,
    on(authActions.register, (state) => ({ ...state, isSubmitting: true }))
  ),
});

export const {
  name: AuthFeatureKey,
  reducer: AuthFeatureReducer,
  selectIsSubmitting,
} = authFeature;
