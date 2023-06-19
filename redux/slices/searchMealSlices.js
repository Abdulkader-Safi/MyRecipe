import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  MealID: 52874,
};

export const searchMealSlice = createSlice({
  name: "searchMeal",
  initialState,
  reducers: {
    SET_MEAL_ID: (state, action) => {
      const { MealID } = action.payload;
      state.MealID = MealID;
    },
  },
});

export const { SET_MEAL_ID } = searchMealSlice.actions;

export const selectMealID = (state) => state.searchMeal.MealID;

export default searchMealSlice.reducer;
