import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    register: props<{ request: RegisterRequestInterface }>(),
    registerSuccess: props<{ currentUser: CurrentUserInterface }>(),
    registerFailure: emptyProps(),
  },
});

// export const registerAction = createAction(
//   '[Auth] Register',
//   props<{ request: RegisterRequestInterface }>()
// );
