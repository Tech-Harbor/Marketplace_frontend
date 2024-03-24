import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: '',
  },

  reducers: {
    takeToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { takeToken } = tokenSlice.actions;

export default tokenSlice.reducer;
