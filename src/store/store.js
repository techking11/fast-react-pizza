import { configureStore } from '@reduxjs/toolkit';

import userReducer from '@/store/userSlice';
import cartReducer from '@/store/cartSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
