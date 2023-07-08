export interface BackendErrorsInterface {
  type: string;
  title: string;
  status: number;
  errors?: {
    [key: string]: string[];
  };
}
