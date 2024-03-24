import { configureStore } from '@reduxjs/toolkit';
import token from './auth/tokenSlice.js';
import showModal from './auth/modalSlice.js';

export default configureStore({
  reducer: {
    token,
    showModal,
  },
});
