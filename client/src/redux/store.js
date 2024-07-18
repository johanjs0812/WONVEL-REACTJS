import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import paymentSlice from './slices/paymentSlice';
import navigationSlice from './slices/navigationSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    payment: paymentSlice,
    navigation: navigationSlice
  },
});

export default store;
