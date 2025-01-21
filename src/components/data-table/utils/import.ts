/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Table } from '@tanstack/react-table';

interface ImportTableFromCSVOptions<TData> {
  /**
   * The table instance
   */
  table: Table<TData>;

  /**
   * API endpoint to upload the data
   */
  apiEndpoint: string;

  /**
   * Optional callback when import succeeds
   */
  onSuccess?: (data: TData[]) => void;

  /**
   * Optional callback when import fails
   */
  onError?: (error: Error) => void;

  /**
   * Optional callback to transform CSV data before upload
   */
  transformData?: (data: Record<string, any>[]) => TData[];

  /**
   * Optional headers to exclude from import
   */
  excludeColumns?: string[];
}

export async function importTableFromCSV<TData>({
  apiEndpoint,
  onSuccess,
  onError,
  transformData,
  excludeColumns = [],
}: ImportTableFromCSVOptions<TData>): Promise<void> {
  // Create file input element
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = '.csv';

  fileInput.onchange = async (e) => {
    try {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      // Read file content
      const content = await file.text();

      // Parse CSV
      const rows = content.split('\n');
      const headers = rows[0]
        .split(',')
        .map((header) => header.trim().replace(/["']/g, ''))
        .filter((header) => !excludeColumns.includes(header));

      // Parse data rows
      const jsonData = rows
        .slice(1)
        .filter((row) => row.trim())
        .map((row) => {
          const values = row.split(',').map((value) => value.trim().replace(/["']/g, ''));

          return headers.reduce(
            (obj, header, index) => {
              obj[header] = values[index];
              return obj;
            },
            {} as Record<string, any>,
          );
        });

      // Transform data if transformer provided
      const transformedData = transformData ? transformData(jsonData) : (jsonData as unknown as TData[]);

      // Upload to API
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transformedData),
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const result = await response.json();

      // Call success callback if provided
      onSuccess?.(result);
    } catch (error) {
      // Call error callback if provided
      onError?.(error as Error);
    }
  };

  // Trigger file selection
  fileInput.click();
}
