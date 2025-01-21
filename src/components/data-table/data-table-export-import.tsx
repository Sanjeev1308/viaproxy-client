/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import { Table } from '@tanstack/react-table';
import { DownloadIcon, UploadIcon } from 'lucide-react';
import { exportTableToCSV } from './utils/export';
import { importTableFromCSV } from './utils/import';

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export function DataTableExportImport<TData>({ table }: DataTableViewOptionsProps<TData>) {
  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="ml-auto hidden h-8 lg:flex"
        onClick={() => {
          importTableFromCSV({
            table,
            apiEndpoint: '/api/import-data',
            excludeColumns: ['actions', 'select'],

            // Optional: Transform data before upload
            transformData: (csvData: any) => {
              return csvData.map((row: any) => ({
                ...row,
                // Add any transformations here
                createdAt: new Date().toISOString(),
              }));
            },

            // Optional: Success handler
            onSuccess: (data: any) => {
              console.log('Import successful:', data);
              // Refresh table or show success message
            },

            // Optional: Error handler
            onError: (error: any) => {
              console.error('Import failed:', error);
              // Show error message to user
            },
          });
        }}
      >
        <UploadIcon className="mr-2 h-4 w-4" />
        Import
      </Button>

      <Button
        variant="outline"
        size="sm"
        className="ml-auto hidden h-8 lg:flex"
        onClick={() =>
          exportTableToCSV(table, {
            filename: 'tasks',
            excludeColumns: ['select', 'actions'],
          })
        }
      >
        <DownloadIcon className="mr-2 h-4 w-4" />
        Export
      </Button>
    </>
  );
}
