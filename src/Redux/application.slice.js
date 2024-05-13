import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applications: null,
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    getApplications: (state, action) => {
      state.applications = action.payload;
    },
  },
});
export const { getApplications } = applicationSlice.actions;
export default applicationSlice.reducer;
