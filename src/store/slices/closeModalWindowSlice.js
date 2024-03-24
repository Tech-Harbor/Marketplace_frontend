import { createSlice } from '@reduxjs/toolkit';

const closeModalWindowSlice = createSlice({
  name: 'close',
  initialState: {
    check: false,
  },

  reducers: {
    closeWindow(state, action) {
      state.check = action.payload;
    },
  },
});

export const { closeWindow } = closeModalWindowSlice.actions;

export default closeModalWindowSlice.reducer;
