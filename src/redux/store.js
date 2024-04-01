import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slices.js';

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
