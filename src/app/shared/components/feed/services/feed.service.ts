import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GetFeedResponseInterface } from '../types/getFeedResponse.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private _http: HttpClient) {}

  getGlobalFeed(url: string): Observable<GetFeedResponseInterface> {
    const baseUrl = environment.apiUrl + url;
    return this._http.get<GetFeedResponseInterface>(baseUrl);
  }
}
