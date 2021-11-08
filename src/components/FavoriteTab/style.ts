import styled from "styled-components";

type FavoriteTabType = {
  toggleTab: boolean;
};

export const FavoriteTab = styled.div<FavoriteTabType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 95%;
  z-index: 999;
  position: absolute;
  padding: 2em;
  right: 0;
  overflow-y: scroll;
  visibility: ${({ toggleTab }) => toggleTab && "hidden"};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
export const FavoriteTitle = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: xx-large;
`;
export const FavoriteItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100%;
`;
export const FavoriteItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1em 1em;
  margin: 1em;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 1em;
`;
export const MovieImage = styled.img`
  width: 70px;
  height: 70px;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 60%;
`;
export const Title = styled.h1`
  text-align: left;
  width: 100%;
  font-family: "Rubik", sans-serif;
  font-size: medium;
`;
export const ImdbRating = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: x-small;
`;
