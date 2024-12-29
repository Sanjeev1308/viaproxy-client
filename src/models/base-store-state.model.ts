import { IAuth } from './auth.model';
import { IDataTableDialogs } from './data-table-dialog.model';

export interface BaseStoreState {
  dataTableDialog: IDataTableDialogs;
  auth: IAuth;
}
