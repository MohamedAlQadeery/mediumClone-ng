import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticleInterface } from '../types/article.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CreateArticleRequest } from '../types/createArticleRequest.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private _http: HttpClient) {}

  getArticleDetails(id: string): Observable<ArticleInterface> {
    const baseUrl = environment.apiUrl + `/articles/${id}`;
    return this._http.get<ArticleInterface>(baseUrl);
  }

  deleteArticle(id: string): Observable<{}> {
    const baseUrl = environment.apiUrl + `/articles/${id}`;
    return this._http.delete<ArticleInterface>(baseUrl);
  }

  createArticle(request: CreateArticleRequest) {
    const baseUrl = environment.apiUrl + `/articles/`;
    return this._http.post<ArticleInterface>(baseUrl, request);
  }
}
