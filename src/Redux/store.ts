import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import favSlice from "./favSlice";
import catSlice from "./catSlice";

export const store = configureStore({
  reducer: {
    // [catsApi.reducerPath]: catsApi.reducer,
    cats: catSlice,
    favs: favSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(catsApi.middleware),
});
// setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
