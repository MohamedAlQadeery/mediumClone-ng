import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { combineLatest } from 'rxjs';
import { BackendErrorsMessagesComponent } from 'src/app/shared/components/backend-errors/backend-errors.component';
import { selectIsSubmitting, selectValidatonErrors } from '../store/reducers';
import { AuthStateInterface } from '../types/authState.interface';
import { Store } from '@ngrx/store';
import { LoginRequestInterface } from '../types/loginRequest.interface';
import { authActions } from '../store/actions';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CommonModule,
    BackendErrorsMessagesComponent,
  ],
})
export class LoginComponent {
  registerForm = this._formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  data$ = combineLatest({
    isSubmitting: this._store.select(selectIsSubmitting),
    backendErrors: this._store.select(selectValidatonErrors),
  });
  constructor(
    private _formBuilder: FormBuilder,
    private _store: Store<AuthStateInterface>
  ) {}

  onSubmit() {
    const request: LoginRequestInterface = {
      email: this.registerForm.getRawValue().email,
      password: this.registerForm.getRawValue().password,
    };
    this._store.dispatch(authActions.login({ request }));
  }
}
