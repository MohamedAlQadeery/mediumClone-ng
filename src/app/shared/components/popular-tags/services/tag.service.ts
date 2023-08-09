import { Injectable } from '@angular/core';
import { TagResponseInterface } from '../types/popularTagResponse.interface';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  constructor(private _http: HttpClient) {}
  getPopularTags(): Observable<TagResponseInterface[]> {
    const url = environment.apiUrl + '/tags/popular';
    return this._http.get<TagResponseInterface[]>(url);
  }
}
