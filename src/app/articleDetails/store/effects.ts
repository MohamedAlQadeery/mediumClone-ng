import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArticleService } from 'src/app/shared/services/article.service';
import { articleDetailsActions } from './actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export const getArticleDetailsEffect = createEffect(
  (actions$ = inject(Actions), articleSertvice = inject(ArticleService)) => {
    return actions$.pipe(
      ofType(articleDetailsActions.getArticleDetails),
      switchMap(({ id }) => {
        return articleSertvice.getArticleDetails(id).pipe(
          map((res) => {
            return articleDetailsActions.getArticleDetailsSuccess({
              article: res,
            });
          }),
          catchError((error: HttpErrorResponse) => {
            console.log(error);
            return of(articleDetailsActions.getArticleDetailsFailure());
          })
        );
      })
    );
  },
  {
    functional: true,
  }
);
