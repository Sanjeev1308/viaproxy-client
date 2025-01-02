/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnFiltersState, SortingState } from '@tanstack/react-table';
import { useState } from 'react';

interface QueryParams {
  page: number;
  limit: number;
  filter: Record<string, any>;
  sort: string;
}

interface UseDataTableProps {
  initialPageSize?: number;
}

export const useDataTable = ({ initialPageSize = 10 }: UseDataTableProps = {}) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: initialPageSize,
  });
  const [filter, setFilter] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 1,
    limit: initialPageSize,
    filter: {},
    sort: '',
  });

  const handlePaginationChange = (pageIndex: number, pageSize: number) => {
    setPagination({ pageIndex, pageSize });
    setQueryParams((prev) => ({
      ...prev,
      page: pageIndex + 1,
      limit: pageSize,
    }));
  };

  const handleSortingChange = (sorting: SortingState) => {
    const sort = sorting.length > 0 ? `${sorting[0].desc ? '-' : ''}${sorting[0].id}` : '';
    setSorting(sorting);
    setQueryParams((prev) => ({ ...prev, sort }));
  };

  const handleFiltersChange = (filters: ColumnFiltersState) => {
    const filterObj = filters.reduce(
      (acc, filter) => ({
        ...acc,
        [filter.id]: filter.value,
      }),
      {},
    );
    setFilter(filters);
    setQueryParams((prev) => ({ ...prev, filter: filterObj }));
  };

  return {
    pagination,
    filter,
    sorting,
    queryParams,
    handlePaginationChange,
    handleSortingChange,
    handleFiltersChange,
  };
};
