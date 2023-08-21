import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticleInterface } from '../types/article.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private _http: HttpClient) {}

  getArticleDetails(id: string): Observable<ArticleInterface> {
    const baseUrl = environment.apiUrl + `/articles/${id}`;
    return this._http.get<ArticleInterface>(baseUrl);
  }
}
