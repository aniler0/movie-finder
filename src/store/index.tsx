import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  //we assign all slicers which has reducers in the configureStore object.
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>; //gets types from slices and combine all types inside of rootstate.
export type AppDispatch = typeof store.dispatch; //type of dispatch

/* dispatch type has been defined.
We don't need to define dispatch's type all the time that we use dispatch.*/
export const useAppDispatch = () => useDispatch<AppDispatch>();

/* selector type has been defined.
We don't need to define selector's type all the time that we use selector.*/
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
