import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArticleService } from 'src/app/shared/services/article.service';
import { createArticleActions } from './actions';
import { map, switchMap, catchError, of, tap } from 'rxjs';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

export const createArticleEffect = createEffect(
  (actions$ = inject(Actions), articleSertvice = inject(ArticleService)) => {
    return actions$.pipe(
      ofType(createArticleActions.createArticle),
      switchMap(({ request }) => {
        return articleSertvice.createArticle(request).pipe(
          map((article) => {
            return createArticleActions.createArticleSuccess({ article });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(
              createArticleActions.createArticleFailure({ errors: error.error })
            );
          })
        );
      })
    );
  },
  {
    functional: true,
  }
);

export const redirectAfterCreateArticleSuccessEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(createArticleActions.createArticleSuccess),
      tap(({ article }) => {
        router.navigate(['/articles', article.id]);
      })
    );
  },
  {
    functional: true,
    dispatch: false,
  }
);
