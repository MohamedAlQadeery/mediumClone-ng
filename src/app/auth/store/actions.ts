import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../types/registerRequest.interface';

export const registerAction = createAction(
  '[Auth] Register',
  props<{ request: RegisterRequestInterface }>()
);
