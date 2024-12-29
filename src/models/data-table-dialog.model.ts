/* eslint-disable @typescript-eslint/no-explicit-any */
type DataTableDialogType = 'view' | 'delete';

export interface IDataTableDialogs {
  open: DataTableDialogType | null;
  currentRow: any | null;
}
