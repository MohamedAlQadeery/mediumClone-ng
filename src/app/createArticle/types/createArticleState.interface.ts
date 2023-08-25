import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

export interface CreateArticleStateInterface {
  isSubmitting: boolean;
  errors: BackendErrorsInterface | null;
}
