import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket/basket.slice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// redux-persist
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, basketReducer);

export const store = configureStore({
  reducer: {
    basket: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, //fix console err
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
