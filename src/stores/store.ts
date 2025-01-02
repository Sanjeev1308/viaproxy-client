import { dataTableDialogReducer } from '@/stores/slices/data-table-dialog.slice';
import { configureStore } from '@reduxjs/toolkit';
import { appSettingsReducer } from './slices/app-settings';
import { authReducer } from './slices/auth.slice';

export const store = configureStore({
  reducer: { dataTableDialog: dataTableDialogReducer, auth: authReducer, appSettings: appSettingsReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
