import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { popluarTagsActions } from './store/actions';
import { combineLatest } from 'rxjs';
import { selectData, selectError, selectIsLoading } from './store/reducers';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popular-tags.component.html',
  standalone: true,
  imports: [CommonModule, LoadingComponent, ErrorMessageComponent, RouterLink],
})
export class PopularTagsComponent implements OnInit {
  constructor(private _store: Store) {}
  data$ = combineLatest({
    isLoading: this._store.select(selectIsLoading),
    tags: this._store.select(selectData),
    errors: this._store.select(selectError),
  });
  ngOnInit(): void {
    this._store.dispatch(popluarTagsActions.getPopularTags());
  }
}
