import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});
export const { setUser } = profileSlice.actions;
export default profileSlice.reducer;
// Compare this snippet from Client/src/slices/index.js:
// import { combineReducers } from "redux";
// import authReducer from "./authSlics";
