import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

export const articleDetailsActions = createActionGroup({
  source: 'articleDetails',
  events: {
    getArticleDetails: props<{ slug: string }>(),
    getArticleDetailsSuccess: props<{ article: ArticleInterface }>(),
    getArticleDetailsFailure: emptyProps(),
  },
});
