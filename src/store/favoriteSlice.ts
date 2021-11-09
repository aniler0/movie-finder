import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialType } from "types/favoriteSlice";
import { Movie } from "types/movieSlice";
import { saveLocalStorage } from "utils/localStorage";

const initialState: initialType = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Movie>) => {
      state.favorites = [...state.favorites, action.payload];
      saveLocalStorage(state); // we store the favorites state with state key in localstorage
    },
    deleteFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((deleted) => {
        return deleted.id !== action.payload;
      });
      saveLocalStorage(state);
    },
  },
});

export default favoriteSlice.reducer;
export const { addFavorite, deleteFavorite } = favoriteSlice.actions;
