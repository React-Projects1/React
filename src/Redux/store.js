import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Reduxs/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
