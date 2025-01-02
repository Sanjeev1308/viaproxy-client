import { appSettingsActionCreators } from '@/stores/slices/app-settings';
import { authActionCreators } from '@/stores/slices/auth.slice';
import { dataTableDialogActionCreators } from '@/stores/slices/data-table-dialog.slice';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    { ...dataTableDialogActionCreators, ...authActionCreators, ...appSettingsActionCreators },
    dispatch,
  );
};
