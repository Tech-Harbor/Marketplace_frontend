import { createSlice } from '@reduxjs/toolkit';
// import { loginUser } from './operations.js';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isShowModal: false,
    typeForm: null,
    tokens: null,
  },
  reducers: {
    showAuthModal(state, action) {
      state.isShowModal = action.payload;
    },
    showTypeForm(state, action) {
      state.typeForm = action.payload;
    },
    setTokens(state, { payload }) {
      state.tokens = payload;
      //   payload={
      //   "accessToken": "string",
      //   "refreshToken": "string"
      // }
    },
  },

  // extraReducers: builder => {
  //   builder.addCase(loginUser.pending, (state, { payload }));
  // },
});

export const { showAuthModal, showTypeForm, setTokens } = authSlice.actions;
export const authReducer = authSlice.reducer;
