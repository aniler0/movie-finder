import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./movieSlice";

type initialType = {
  favorites: User[];
  //
};

const initialState: initialType = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<User>) => {
      state.favorites = [...state.favorites, action.payload];
    },
  },
});

export default favoriteSlice.reducer;
export const { addFavorite } = favoriteSlice.actions;
