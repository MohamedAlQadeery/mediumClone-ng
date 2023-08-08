import { PaginatedListInterface } from 'src/app/shared/types/paginatedList.interface';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

export interface FeedStateInterface {
  isLoading: boolean;
  error: string | null;
  data: PaginatedListInterface<ArticleInterface> | null;
}
