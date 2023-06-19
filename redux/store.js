import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlices";
import routeReducer from "./slices/routeSlices";
import searchMealReducer from "./slices/searchMealSlices";

const rootReducer = combineReducers({
  auth: authReducer,
  route: routeReducer,
  searchMeals: searchMealReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
