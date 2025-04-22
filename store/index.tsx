import { configureStore } from "@reduxjs/toolkit";
import getDataSlice from "./slices/getData";
import authReducer from "./slices/auth";
import cartReducer from "./slices/cart";
import filterReducer from "./slices/filter";
import favoriteReducer from "./slices/favorite";

export const store = configureStore({
  reducer: {
    getData: getDataSlice,
    Auth: authReducer,
    Cart: cartReducer,
    Filter: filterReducer,
    Favorite: favoriteReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
