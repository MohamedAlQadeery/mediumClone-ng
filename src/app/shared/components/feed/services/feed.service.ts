import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PaginatedListInterface } from 'src/app/shared/types/paginatedList.interface';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private _http: HttpClient) {}

  getGlobalFeed(
    url: string
  ): Observable<PaginatedListInterface<ArticleInterface>> {
    const baseUrl = environment.apiUrl + url;
    return this._http.get<PaginatedListInterface<ArticleInterface>>(baseUrl);
  }
}
