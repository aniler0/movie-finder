import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialType } from "types/favoriteSlice";
import { Movie } from "types/movieSlice";

const initialState: initialType = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Movie>) => {
      state.favorites = [...state.favorites, action.payload];
      const serializedState = JSON.stringify(state.favorites);
      localStorage.setItem("state", serializedState);
    },
    deleteFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((deleted) => {
        return deleted.id !== action.payload;
      });
      const serializedState = JSON.stringify(state.favorites);
      localStorage.setItem("state", serializedState);
    },
  },
});

export default favoriteSlice.reducer;
export const { addFavorite, deleteFavorite } = favoriteSlice.actions;
