import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  currentUser: string | null;
  loading: boolean;
  error: boolean;
}

const initialState: UserState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logInStart: (state) => {
      state.loading = true;
    },
    logInSuccess: (state, action: PayloadAction<string>) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    logInFailure: (state) => {
      state.loading = false;
      state.error = true; 
    },
    updateCurrentUser: (state, action: PayloadAction<string>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { logInStart, logInSuccess, logInFailure, updateCurrentUser } = userSlice.actions;
export default userSlice.reducer;
