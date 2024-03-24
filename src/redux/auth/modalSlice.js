import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'showModal',
  initialState: {
    check: false,
  },

  reducers: {
    changeShowMode(state, action) {
      state.check = action.payload;
    },
  },
});

export const { changeShowMode } = modalSlice.actions;

export default modalSlice.reducer;
