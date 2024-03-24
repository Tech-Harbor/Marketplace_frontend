import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './slices/tokenSlice.js';
import closeModalWindowReducer from './slices/closeModalWindowSlice.js';

export default configureStore({
  reducer: {
    token: tokenReducer,
    close: closeModalWindowReducer,
  },
});
