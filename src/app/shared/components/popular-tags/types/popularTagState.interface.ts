import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { TagResponseInterface } from './popularTagResponse.interface';

export interface PopularTagStateInterface {
  isLoading: boolean;
  error: BackendErrorsInterface | null;
  data: TagResponseInterface[] | null;
}
