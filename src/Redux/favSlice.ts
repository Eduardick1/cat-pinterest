import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import type { ICat } from "../utils/types";

const initialState: ICat[] = [];

export const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    toggleFav: (state, { payload }: PayloadAction<ICat>) => {
      if (state.some((card) => card.id === payload.id))
        return state.filter((card) => card.id !== payload.id);
      else state.push(payload);
    },
  },
});

export const { toggleFav } = favSlice.actions;

export default favSlice.reducer;

export const selectFavs = (state: RootState) => state.favs;
