import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { TagResponseInterface } from '../types/popularTagResponse.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

export const popluarTagsActions = createActionGroup({
  source: 'popular tags',
  events: {
    getPopularTags: emptyProps(),
    getPopularTagsSuccess: props<{ popularTags: TagResponseInterface[] }>(),
    getPopularTagsFailure: props<{ errorResponse: BackendErrorsInterface }>(),
  },
});
