import { createActionGroup, props } from '@ngrx/store';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { CreateArticleRequest } from 'src/app/shared/types/createArticleRequest.interface';

export const createArticleActions = createActionGroup({
  source: 'createArticle',
  events: {
    createArticle: props<{ request: CreateArticleRequest }>(),
    createArticleSuccess: props<{ article: ArticleInterface }>(),
    createArticleFailure: props<{ errors: BackendErrorsInterface }>(),
  },
});
