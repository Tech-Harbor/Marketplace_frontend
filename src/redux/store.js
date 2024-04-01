import { configureStore } from '@reduxjs/toolkit';
import { authModalReducer, tokenReducer } from './auth/slices.js';

export default configureStore({
  reducer: {
    showModal: authModalReducer,
    token: tokenReducer,
  },
});
