import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "api/api";
import { FetchedMovieObject, RootState } from "types/movieSlice";

const initialState: RootState = {
  data: {} as FetchedMovieObject,
  loading: false,
  error: "",
};

export const fetchMovie = createAsyncThunk("fetchMovie", async () => {
  const response = await api().get<FetchedMovieObject>(
    "/Top250Movies/k_a5odkv9v"
  );
  return response.data;
});

const movieSlice = createSlice({
  name: "movieList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovie.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchMovie.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error while fetching data";
    });
  },
});

export default movieSlice.reducer;
