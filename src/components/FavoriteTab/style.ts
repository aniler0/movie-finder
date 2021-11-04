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
  height: 100%;
  z-index: 999;
  position: absolute;
  padding: 2em;
  right: 0;
  top: 0;
  border: 1px solid black;
  overflow-y: scroll;
  visibility: ${({ toggleTab }) => toggleTab && "hidden"};
`;

export const FavoriteItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
`;
export const FavoriteTitle = styled.h1``;

export const FavoriteItem = styled.div`
  width: 100%;
  padding: 3em 2em;
  margin: 1em;
`;
