import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { environment } from 'src/environments/environment.development';
import { RegisterRequestInterface } from '../types/registerRequest.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  register(
    request: RegisterRequestInterface
  ): Observable<AuthResponseInterface> {
    const url = environment.apiUrl + '/auth/register';
    return this._http.post<AuthResponseInterface>(url, request).pipe(
      tap((response) => {
        console.log(response);
      })
    );
  }
}
