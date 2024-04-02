import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isShowModal: false,
    typeForm: null,
    token: '',
  },
  reducers: {
    showAuthModal(state, action) {
      state.isShowModal = action.payload;
    },
    showTypeForm(state, action) {
      state.typeForm = action.payload;
    },
    takeToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { showAuthModal, showTypeForm, takeToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
