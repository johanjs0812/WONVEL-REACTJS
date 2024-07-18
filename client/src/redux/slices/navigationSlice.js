import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    previousPageUrl: null,
  },
  reducers: {
    setPreviousPageUrl: (state, action) => {
      state.previousPageUrl = action.payload;
    },
  },
});

export const { setPreviousPageUrl } = navigationSlice.actions;
export default navigationSlice.reducer;
