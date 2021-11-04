import { useAppSelector } from "store";
import * as S from "./style";

type FavoritePropsType = {
  toggleTab: boolean;
};

const FavoriteTab = ({ toggleTab }: FavoritePropsType) => {
  const favorites = useAppSelector((state) => state.favorites);
  return (
    <S.FavoriteTab toggleTab={toggleTab}>
      <S.FavoriteTitle>Favorite Movies</S.FavoriteTitle>
      <S.FavoriteItemContainer>
        {favorites.favorites.map((favorite) => {
          console.log(favorite);

          return (
            <>
              <S.FavoriteItem>
                <h1>{favorite.firstName}</h1>
                <h1>{favorite.title}</h1>
              </S.FavoriteItem>
            </>
          );
        })}
      </S.FavoriteItemContainer>
    </S.FavoriteTab>
  );
};

export default FavoriteTab;
