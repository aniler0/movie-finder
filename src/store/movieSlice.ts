import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "api/api";

export interface User {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

interface RootObject {
  data: User[];
  total: number;
  page: number;
  limit: number;
}

interface MovieState {
  data: RootObject | null;
  loading: boolean;
  error: string;
}

const initialState: MovieState = {
  data: null,
  loading: false,
  error: "",
};
export const fetchMovie = createAsyncThunk("fetchMovie", async () => {
  const response = await api().get<RootObject>("/user");
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
