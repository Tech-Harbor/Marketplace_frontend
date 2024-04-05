import { configureStore } from '@reduxjs/toolkit';
import token from './auth/tokenSlice.js';

export default configureStore({
  reducer: {
    token,
  },
});
