import { createSlice } from '@reduxjs/toolkit';
import { loginUserThunk } from './operations.js';

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};
const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};
const handleFulfilledLoginUser = (state, { payload }) => {
  state.tokens = payload;
  state.typeForm = null;
  state.isLoading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    typeForm: null,
    tokens: null,
    resetPasswordToken: null,
    isLoading: false,
    error: '',
  },
  reducers: {
    showTypeForm(state, action) {
      state.typeForm = action.payload;
    },

    setResetPasswordToken(state, { payload }) {
      state.resetPasswordToken = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(loginUserThunk.pending, handlePending)
      .addCase(loginUserThunk.rejected, handleRejected)
      .addCase(loginUserThunk.fulfilled, handleFulfilledLoginUser);
  },
});

export const authReducer = authSlice.reducer;

export const { showTypeForm, setResetPasswordToken } = authSlice.actions;
