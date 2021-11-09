import { initialType } from "types/favoriteSlice";

export const getLocalStorageData = () => {
  const retrievedObject: any = localStorage.getItem("state");
  return JSON.parse(retrievedObject);
};

export const saveLocalStorage = (state: initialType) => {
  const serializedState = JSON.stringify(state.favorites);
  localStorage.setItem("state", serializedState);
};
