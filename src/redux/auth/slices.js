import { createSlice } from '@reduxjs/toolkit';

const authModalSlices = createSlice({
  name: 'authModal',
  initialState: {
    status: false,
  },

  reducers: {
    showAuthModal(state, action) {
      state.status = action.payload;
    },
  },
});

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

export const { showAuthModal } = authModalSlices.actions;
export const authModalReducer = authModalSlices.reducer;

export const { takeToken } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;
