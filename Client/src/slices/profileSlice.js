import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  loading: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});
export const { setUser, setLoading } = profileSlice.actions;
export default profileSlice.reducer;
// Compare this snippet from Client/src/slices/index.js:
// import { combineReducers } from "redux";
// import authReducer from "./authSlics";
