import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setLoading, setUser } = userSlice.actions;

export default userSlice.reducer;
