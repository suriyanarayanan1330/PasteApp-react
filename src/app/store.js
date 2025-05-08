// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import pasteReducer from '../features/counter/pasteSlice';

export const store = configureStore({
  reducer: {
    paste: pasteReducer,
  },
});
