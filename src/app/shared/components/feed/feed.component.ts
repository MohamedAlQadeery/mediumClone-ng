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
import { RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class FeedComponent implements OnInit {
  @Input() apiUrl: string = '';
  imagePath = environment.imagesSmallPath;
  data$ = combineLatest({
    isLoading: this._store.select(selectFeedIsLoading),
    error: this._store.select(selectFeedError),
    feed: this._store.select(selectFeedData),
  });
  constructor(private _store: Store) {}
  ngOnInit(): void {
    this._store.dispatch(feedActions.getFeed({ url: this.apiUrl }));
  }
}
