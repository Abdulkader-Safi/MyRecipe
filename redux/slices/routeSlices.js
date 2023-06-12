import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navPage: "HOME",
};

export const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    SET_NAVIGATION_PAGE: (state, action) => {
      const { page } = action.payload;
      state.navPage = page;
    },
  },
});

export const { SET_NAVIGATION_PAGE } = routeSlice.actions;

export const selectNavPage = (state) => state.route.navPage;

export default routeSlice.reducer;
