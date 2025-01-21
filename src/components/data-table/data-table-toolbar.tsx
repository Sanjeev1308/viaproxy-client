/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table } from '@tanstack/react-table';
import { X } from 'lucide-react';
import { KeyboardEvent, useState } from 'react';
import { DataTableFacetedFilter } from './data-table-faceted-filter';
import { DataTableViewOptions } from './data-table-view-options';

interface DataTableToolbarProps {
  table: Table<any>;
  filterFields: {
    label: string;
    value: string;
    placeholder?: string;
    options?: {
      label: string;
      value: string;
      icon?: any;
      withCount?: boolean;
    }[];
  }[];
}

export function DataTableToolbar({ table, filterFields }: DataTableToolbarProps) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const [inputValues, setInputValues] = useState<Record<string, string>>({});

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>, column: any, value: string) => {
    if (event.key === 'Enter') {
      column.setFilterValue(value);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {filterFields.map((field) => {
          const column = table.getColumn(field.value);
          if (!column) return null;

          if (field.options) {
            return (
              <DataTableFacetedFilter key={field.value} column={column} title={field.label} options={field.options} />
            );
          }

          return (
            <Input
              key={field.value}
              placeholder={field.placeholder}
              value={inputValues[field.value] ?? ''}
              onChange={(event) => setInputValues((prev) => ({ ...prev, [field.value]: event.target.value }))}
              onKeyDown={(event) => handleKeyDown(event, column, inputValues[field.value] ?? '')}
              className="h-8 w-[150px] lg:w-[250px]"
            />
          );
        })}

        {isFiltered && (
          <Button variant="ghost" onClick={() => table.resetColumnFilters()} className="h-8 px-2 lg:px-3">
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="flex gap-2">
        {/* <DataTableExportImport table={table} /> */}
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}
