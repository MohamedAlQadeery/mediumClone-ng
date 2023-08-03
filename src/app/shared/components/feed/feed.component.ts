import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { feedActions } from './store/actions';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  standalone: true,
})
export class FeedComponent implements OnInit {
  @Input() apiUrl: string = '';
  constructor(private _store: Store) {}
  ngOnInit(): void {
    this._store.dispatch(feedActions.getFeed({ url: this.apiUrl }));
  }
}
