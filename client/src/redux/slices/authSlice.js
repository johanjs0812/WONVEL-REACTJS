import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isLoggedIn = true;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, clearErrors } = authSlice.actions;

export default authSlice.reducer;
