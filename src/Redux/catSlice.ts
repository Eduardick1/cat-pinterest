// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ICat, catsSliceT } from "../utils/types";
import { LIMIT_CARDS } from "../utils/const";
import type { RootState } from "./store";
import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCats = createAsyncThunk<ICat[], number>(
  "cats/fetchCats",
  async function (page, { rejectWithValue }) {
    const url = `https://api.thecatapi.com/v1/images/search?limit=${LIMIT_CARDS}&page=${page}`;
    try {
      const responce = await axios.get(url, {
        headers: {
          "x-api-key":
            "live_OiwjGWDbT2CC7x11DxochbJR42nauunYha54VWUa6RuEwVdqj8q0SwNTVqcyCi3G",
        },
      });
      console.log(responce);
      if (responce.status !== 200) {
        throw new Error("Fetching Error");
      }
      return responce.data;
    } catch (error) {
      rejectWithValue(error);
      console.error(error);
    }
  }
);

const catSlice = createSlice({
  name: "followers",
  initialState: {
    isLoading: false,
    isError: false,
    cats: [],
  } as catsSliceT,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCats.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(
      fetchCats.fulfilled,
      (state, { payload }: PayloadAction<ICat[]>) => {
        state.cats = state.cats.concat(payload);
        state.isLoading = false;
      }
    );
    builder.addCase(fetchCats.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default catSlice.reducer;

export const selectCats = (state: RootState) => state.cats;

// export const catsApi = createApi({
//   reducerPath: "cats",
//   baseQuery: fetchBaseQuery({
//     baseUrl: `https://api.thecatapi.com/v1/images`,
//     headers: {
//       "x-api-key":
//         "live_OiwjGWDbT2CC7x11DxochbJR42nauunYha54VWUa6RuEwVdqj8q0SwNTVqcyCi3G",
//     },
//   }),
//   endpoints: (builder) => ({
//     getCatsPerPage: builder.query<ICat[], number>({
//       query: (page) => `search?limit=${LIMIT_CARDS}&page=${page}`,
//     }),
//   }),
// });

// export const { useGetCatsPerPageQuery } = catsApi;
