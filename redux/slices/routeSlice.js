import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
  navigationType: "stack",
  lastROute: null,
};

export const routeSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    SET_NAV_TYPE_Route: (state, action) => {
      const { type, route } = action.payload;
      state.navigationType = type;
      state.lastROute = route;
    },
  },
});

export const { SET_NAV_TYPE_Route } = routeSlice.actions;

export const selectNavType = (state) => state.auth.navigationType;
export const selectLastRoute = (state) => state.auth.lastROute;

export default routeSlice.reducer;
