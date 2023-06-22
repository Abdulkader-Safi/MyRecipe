import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navPage: "HOME",
  recipeUID: null,
};

export const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    SET_NAVIGATION_PAGE: (state, action) => {
      const { page } = action.payload;
      if (page !== "SelectedRecipe") {
        state.recipeUID = null;
      }
      state.navPage = page;
    },
    SET_SELECTED_RECIPE_WITH_NAVIGATION: (state, action) => {
      const { page, uid } = action.payload;
      state.navPage = page;
      state.recipeUID = uid;
    },
  },
});

export const { SET_NAVIGATION_PAGE, SET_SELECTED_RECIPE_WITH_NAVIGATION } = routeSlice.actions;

export const selectNavPage = (state) => state.route.navPage;
export const selectRecipeUID = (state) => state.route.recipeUID;

export default routeSlice.reducer;
