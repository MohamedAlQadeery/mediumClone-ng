import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedService } from '../services/feed.service';
import { feedActions } from './actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { PaginatedListInterface } from 'src/app/shared/types/paginatedList.interface';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

export const getFeedEffect = createEffect(
  (actions$ = inject(Actions), feedService = inject(FeedService)) => {
    return actions$.pipe(
      ofType(feedActions.getFeed),
      switchMap(({ url }) => {
        return feedService.getGlobalFeed(url).pipe(
          map((feed: PaginatedListInterface<ArticleInterface>) => {
            return feedActions.getFeedSuccess({ feed });
          }),
          catchError(() => {
            return of(feedActions.getFeedFailure());
          })
        );
      })
    );
  },
  {
    functional: true,
  }
);
