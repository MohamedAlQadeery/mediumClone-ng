export interface PaginatedListInterface<T> {
  items: T[];
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  totalPages: number;
  previousPageNumber: number;
  nextPageNumber: number;
}
