import { sliceConstant } from '@/constants/slice.constant';
import { IAppSettings } from '@/models/app-settings.model';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IAppSettings = {
  lang: 'en',
};

const appSettingsSlice = createSlice({
  name: sliceConstant.APP_SETTINGS,
  initialState,
  reducers: {
    setLanguage: (state, { payload }) => {
      state.lang = payload;
    },
  },
});

export const { setLanguage } = appSettingsSlice.actions;

export const appSettingsActionCreators = {
  setLanguage,
};

export const appSettingsReducer = appSettingsSlice.reducer;
