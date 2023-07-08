import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  RegisterRequestInterface,
  AddressInterface,
} from '../types/registerRequest.interface';
import { Store } from '@ngrx/store';
import { authActions } from '../store/actions';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthStateInterface } from '../types/authState.interface';
import { selectIsSubmitting } from '../store/reducers';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
})
export class RegisterComponent {
  registerForm = this._formBuilder.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    streetAddress: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipCode: ['', Validators.required],
  });

  isSubmitting$ = this._store.select(selectIsSubmitting);

  constructor(
    private _formBuilder: FormBuilder,
    private _store: Store<AuthStateInterface>
  ) {}

  onSubmit() {
    console.log('form', this.registerForm.getRawValue());
    const request: RegisterRequestInterface = {
      firstName: this.registerForm.getRawValue().firstName,
      lastName: this.registerForm.getRawValue().lastName,
      email: this.registerForm.getRawValue().email,
      password: this.registerForm.getRawValue().password,
      address: {
        street: this.registerForm.getRawValue().streetAddress,
        city: this.registerForm.getRawValue().city,
        state: this.registerForm.getRawValue().state,
        zipCode: this.registerForm.getRawValue().zipCode,
      },
    };
    this._store.dispatch(authActions.register({ request }));

    console.log('request', request);
  }
}
