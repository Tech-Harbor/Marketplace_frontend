import { createSlice } from '@reduxjs/toolkit';
import { loginUserThunk, requestEmailThunk, resetPasswordThunk } from './operations.js';
import { TYPE_FORM } from '../../constants/index.js';

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};
const handleRejected = (state, { error, payload }) => {
  state.isLoading = false;
  console.error('loginUserThunk.rejected error :>> ', error);
  console.error('loginUserThunk.rejected payload :>> ', payload);
  state.error = error.message;
};
const handleFulfilledLoginUser = (state, { payload }) => {
  state.tokens = payload;
  state.typeForm = null;
  state.isLoading = false;
};
const handleFulfilledRequestEmail = (state, { payload }) => {
  state.resetPasswordToken = payload;
  state.isLoading = false;
};
const handleFulfilledResetPassword = state => {
  state.resetPasswordToken = null;
  state.typeForm = TYPE_FORM.LOGIN;
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

    setTokenFromEmailLink(state, { payload }) {
      state.resetPasswordToken = payload;
      // state.typeForm = TYPE_FORM.RESET_PSW;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(loginUserThunk.pending, handlePending)
      .addCase(loginUserThunk.rejected, handleRejected)
      .addCase(loginUserThunk.fulfilled, handleFulfilledLoginUser)

      .addCase(requestEmailThunk.pending, handlePending)
      .addCase(requestEmailThunk.rejected, handleRejected)
      .addCase(requestEmailThunk.fulfilled, handleFulfilledRequestEmail)

      .addCase(resetPasswordThunk.pending, handlePending)
      .addCase(resetPasswordThunk.rejected, handleRejected)
      .addCase(resetPasswordThunk.fulfilled, handleFulfilledResetPassword);
  },
});

export const authReducer = authSlice.reducer;

export const { showTypeForm, setTokenFromEmailLink } = authSlice.actions;
