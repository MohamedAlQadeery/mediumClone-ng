import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArticleService } from 'src/app/shared/services/article.service';
import { articleDetailsActions } from './actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

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

export const deleteArticleEffect = createEffect(
  (actions$ = inject(Actions), articleSertvice = inject(ArticleService)) => {
    return actions$.pipe(
      ofType(articleDetailsActions.deleteArticle),
      switchMap(({ id }) => {
        return articleSertvice.deleteArticle(id).pipe(
          map(() => {
            return articleDetailsActions.deleteArticleSuccess();
          }),
          catchError((error: HttpErrorResponse) => {
            console.log(error);
            return of(articleDetailsActions.deleteArticleFailure());
          })
        );
      })
    );
  },
  {
    functional: true,
  }
);

export const redirectAfterDeleteArticleSuccessEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(articleDetailsActions.deleteArticleSuccess),
      tap(() => {
        router.navigateByUrl('/');
      })
    );
  },
  {
    functional: true,
    dispatch: false,
  }
);
