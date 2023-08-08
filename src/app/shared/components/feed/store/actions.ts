import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { PaginatedListInterface } from 'src/app/shared/types/paginatedList.interface';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

export const feedActions = createActionGroup({
  source: 'feed',
  events: {
    getFeed: props<{ url: string }>(),
    getFeedSuccess: props<{ feed: PaginatedListInterface<ArticleInterface> }>(),
    getFeedFailure: emptyProps(),
  },
});
