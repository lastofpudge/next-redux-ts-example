import { configureStore } from "@reduxjs/toolkit";
import basketItemsReducer from "./basket/basket.slice";

export const store = configureStore({
  reducer: {
    basket: basketItemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
