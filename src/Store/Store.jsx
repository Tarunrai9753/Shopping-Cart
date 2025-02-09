// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; 

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add other reducers here
  },
});

export default store;
