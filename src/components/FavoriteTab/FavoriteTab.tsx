import { Delete } from "icons";
import { useDispatch } from "react-redux";
import { useAppSelector } from "store";
import { deleteFavorite } from "store/favoriteSlice";
import * as S from "./style";

type FavoritePropsType = {
  toggleTab: boolean;
};

const FavoriteTab = ({ toggleTab }: FavoritePropsType) => {
  const favorites = useAppSelector((state) => state.favorites);
  const dispatch = useDispatch();
  return (
    <S.FavoriteTab toggleTab={toggleTab}>
      <S.FavoriteTitle>Favorite Movies</S.FavoriteTitle>
      <S.FavoriteItemContainer>
        {favorites.favorites.map((favorite, key) => {
          console.log(favorites);
          return (
            <S.FavoriteItem key={key}>
              <S.MovieImage src={favorite.image} alt={favorite.id} />
              <S.Details>
                <S.Title>{favorite.title}</S.Title>
                <S.ImdbRating>IMDB:{favorite.imDbRating}</S.ImdbRating>
              </S.Details>
              <S.StyledDelete
                onClick={() => dispatch(deleteFavorite(favorite.id))}
              >
                Delete
              </S.StyledDelete>
            </S.FavoriteItem>
          );
        })}
      </S.FavoriteItemContainer>
    </S.FavoriteTab>
  );
};

export default FavoriteTab;
