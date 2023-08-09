import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/auth/store/reducers';
@Component({
  selector: 'mc-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class FeedTogglerComponent {
  @Input() tagName: string | null = null;
  currentUser$ = this._store.select(selectCurrentUser);
  constructor(private _store: Store) {}
}
