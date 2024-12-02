export type PaginationType = {
  totalPage: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
};
