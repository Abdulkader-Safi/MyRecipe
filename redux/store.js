import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlices";
import routeReducer from "./slices/routeSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  route: routeReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
