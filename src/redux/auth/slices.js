import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isShowModal: false,
    showPage: null,
    token: '',
  },
  reducers: {
    showAuthModal(state, action) {
      state.isShowModal = action.payload;
    },
    showAuthPage(state, action) {
      state.showPage = action.payload;
    },
    takeToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { showAuthModal, showAuthPage, takeToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
