import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { feedActions } from './store/actions';
import { combineLatest } from 'rxjs';
import {
  selectFeedData,
  selectFeedError,
  selectFeedIsLoading,
} from './store/reducers';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { LoadingComponent } from '../loading/loading.component';
import { PaginationComponent } from '../pagination/pagination.component';
import queryString from 'query-string';
import { TagListComponent } from './components/tagList.component';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ErrorMessageComponent,
    LoadingComponent,
    PaginationComponent,
    TagListComponent,
  ],
})
export class FeedComponent implements OnInit {
  @Input() apiUrl: string = '';
  imagePath = environment.imagesSmallPath;

  data$ = combineLatest({
    isLoading: this._store.select(selectFeedIsLoading),
    error: this._store.select(selectFeedError),
    feed: this._store.select(selectFeedData),
  });

  //#region Pagination
  pageNumber: number = 1;
  pageSize: number = 2;
  baseUrl = this._router.url.split('?')[0];

  //#endregion
  constructor(
    private _store: Store,
    private _activedRoute: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this._activedRoute.queryParamMap.subscribe((params) => {
      this.pageNumber = Number(params.get('pageNumber') || '1');
      this.getFeed();
    });
  }

  private getFeed() {
    const parsedUrl = queryString.parseUrl(this.apiUrl);
    const stringifiedParams = queryString.stringify({
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
      ...parsedUrl.query,
    });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
    console.log(apiUrlWithParams);
    this._store.dispatch(feedActions.getFeed({ url: apiUrlWithParams }));
  }
}
