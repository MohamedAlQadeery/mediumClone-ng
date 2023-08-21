import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

export interface ArticleDetailsStateInterface {
  isLoading: boolean;
  error: BackendErrorsInterface | null;
  data: ArticleInterface | null;
}
