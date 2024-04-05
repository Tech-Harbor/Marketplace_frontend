import { createSlice } from '@reduxjs/toolkit';
import { loginUserThunk } from './operations.js';

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleRejected = (state, { error, payload }) => {
  state.isLoading = false;
  console.log('loginUserThunk.rejected error :>> ', error);
  console.log('loginUserThunk.rejected payload :>> ', payload);
  state.error = error.message;
};

const handleFulfilledLoginUser = (state, { payload }) => {
  state.tokens = payload;
  state.isLoading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    // isShowModal: false,
    typeForm: null,

    tokens: null,
    isLoading: false,
    error: '',
  },
  reducers: {
    // showAuthModal(state, action) {
    //   state.isShowModal = action.payload;
    // },
    showTypeForm(state, action) {
      state.typeForm = action.payload;
    },
    setTokens(state, { payload }) {
      state.tokens = payload;
      // =>  payload = {
      //   "accessToken": "string",
      //   "refreshToken": "string"
      // } <=
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

export const { showAuthModal, showTypeForm, setTokens } = authSlice.actions;
