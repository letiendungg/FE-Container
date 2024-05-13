import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  users: null,
};
//selector cos tuong tu la lay ra state
//dispatch co tuong tu la set state
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    logOutSuccess: (state, action) => {
      state.currentUser = null;
    },
  },
});
export const { signInSuccess } = userSlice.actions;
export default userSlice.reducer;
