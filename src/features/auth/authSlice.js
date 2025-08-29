import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  role: localStorage.getItem("role") || null,
  user: JSON.parse(localStorage.getItem("user")) || null, // full user details
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.user = action.payload.user;
      localStorage.setItem("token", state.token);
      localStorage.setItem("role", state.role);
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("user");
    },
    updateUser: (state, action) => {
      // Update user details in Redux & localStorage
      state.user = { ...state.user, ...action.payload };
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});

// Selectors
export const selectAuth = (state) => state.auth;
export const selectUser = (state) => state.auth.user;
export const selectRole = (state) => state.auth.role;
export const selectToken = (state) => state.auth.token;

export const { login, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
