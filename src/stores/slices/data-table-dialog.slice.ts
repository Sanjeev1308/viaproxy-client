import { sliceConstant } from '@/constants/slice.constant';
import { IDataTableDialogs } from '@/models/data-table-dialog.model';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IDataTableDialogs = {
  open: null,
  currentRow: null,
};

const dataTableDialogSlice = createSlice({
  name: sliceConstant.DATA_TABLE_DIALOG,
  initialState,
  reducers: {
    setOpen: (state, { payload }) => {
      state.open = payload;
    },

    setCurrentRow: (state, { payload }) => {
      state.currentRow = payload;
    },
  },
});

export const { setOpen, setCurrentRow } = dataTableDialogSlice.actions;

export const dataTableDialogActionCreators = {
  setOpen,
  setCurrentRow,
};

export const dataTableDialogReducer = dataTableDialogSlice.reducer;
