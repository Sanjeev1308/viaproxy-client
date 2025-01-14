/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTablePagination } from '@/components/data-table/data-table-pagination';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import { DataTableToolbar } from './data-table-toolbar';

interface DataTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  mode?: 'client' | 'server';
  pageCount?: number;
  onPaginationChange?: (pageIndex: number, pageSize: number) => void;
  onSortingChange?: (sorting: SortingState) => void;
  onFiltersChange?: (filters: ColumnFiltersState) => void;
  isLoading?: boolean;
  pagination: {
    pageIndex: number;
    pageSize: number;
  };
  sort: SortingState;
  filter: ColumnFiltersState;
  filterFields?: any;
}

export function DataTable<T>({
  columns,
  data,
  mode = 'client',
  pageCount: serverPageCount,
  onPaginationChange,
  onSortingChange,
  onFiltersChange,
  isLoading = false,
  pagination,
  sort,
  filter,
  filterFields,
}: DataTableProps<T>) {
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const isServerMode = mode === 'server';

  const table = useReactTable({
    data,
    columns,
    pageCount: isServerMode ? serverPageCount : undefined,
    state: {
      sorting: sort,
      columnVisibility,
      rowSelection,
      columnFilters: filter,
      pagination,
    },
    enableRowSelection: true,
    manualPagination: isServerMode,
    manualSorting: isServerMode,
    manualFiltering: isServerMode,
    onRowSelectionChange: setRowSelection,
    onSortingChange: (updater) => {
      const newSorting = typeof updater === 'function' ? updater(sorting) : updater;
      setSorting(newSorting);
      if (isServerMode) onSortingChange?.(newSorting);
    },
    onColumnFiltersChange: (updater) => {
      const newFilters = typeof updater === 'function' ? updater(columnFilters) : updater;
      setColumnFilters(newFilters);
      if (isServerMode) onFiltersChange?.(newFilters);
    },
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: (updater: any) => {
      const newPagination = typeof updater === 'function' ? updater(pagination) : updater;
      if (isServerMode) onPaginationChange?.(newPagination.pageIndex, newPagination.pageSize);
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: isServerMode ? undefined : getFilteredRowModel(),
    getPaginationRowModel: isServerMode ? undefined : getPaginationRowModel(),
    getSortedRowModel: isServerMode ? undefined : getSortedRowModel(),
    getFacetedRowModel: isServerMode ? undefined : getFacetedRowModel(),
    getFacetedUniqueValues: isServerMode ? undefined : getFacetedUniqueValues(),
  });

  return (
    <div className="space-y-4">
      {filterFields && <DataTableToolbar table={table} filterFields={filterFields} />}
      <div
        className={cn(
          'rounded-md border',
          'min-h-[50vh]', // Fixed height for the container
          'relative',
        )}
      >
        <div className={cn('absolute inset-0', 'overflow-auto', 'w-full h-full')}>
          <div className="min-w-full inline-block align-middle">
            <Table>
              <TableHeader className="sticky top-0 bg-background z-10">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id} className="group/row">
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      Loading...
                    </TableCell>
                  </TableRow>
                ) : table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'} className="group/row">
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <DataTablePagination table={table} isCheckboxSelection={false} />
    </div>
  );
}
