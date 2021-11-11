import { Delete } from "icons";
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
  height: 88%;
  z-index: 999;
  position: absolute;
  padding: 1em;
  right: 0;
  visibility: ${({ toggleTab }) => toggleTab && "hidden"};
  border-radius: 10px;
  background-color: white;
  @media (max-width: 768px) {
    width: 80%;
    top: 90px;
  }
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
  padding: 0.5em;
  overflow-y: auto;
  overflow-x: hidden;
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
  padding: 5px;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
`;
export const Title = styled.h1`
  text-align: left;
  width: 100%;
  font-family: "Rubik", sans-serif;
  font-size: small;
  padding: 5px;
`;
export const ImdbRating = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: x-small;
  padding: 5px;
`;
export const StyledDelete = styled(Delete)`
  cursor: pointer;
`;
