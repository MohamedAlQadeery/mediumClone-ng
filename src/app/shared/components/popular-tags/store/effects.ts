import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TagService } from '../services/tag.service';
import { popluarTagsActions } from './actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { TagResponseInterface } from '../types/popularTagResponse.interface';

export const getPopularTagsEffect = createEffect(
  (actions$ = inject(Actions), tagService = inject(TagService)) => {
    return actions$.pipe(
      ofType(popluarTagsActions.getPopularTags),
      switchMap(() => {
        return tagService.getPopularTags().pipe(
          map((popularTags: TagResponseInterface[]) => {
            console.log(popularTags);
            return popluarTagsActions.getPopularTagsSuccess({ popularTags });
          }),
          catchError((err: BackendErrorsInterface) => {
            return of(
              popluarTagsActions.getPopularTagsFailure({ errorResponse: err })
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
