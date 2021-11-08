import { Movie } from "types/movieSlice";
import * as S from "./style";

const Card = (movie: Movie) => {
  return (
    <S.CardWrapper url={movie.image}>
      <S.TextWrapper>
        <S.Name>{movie.title}</S.Name>
        <S.Genre>{movie.year}</S.Genre>
        <S.ImdbRating>IMDB Rating:{movie.imDbRating}</S.ImdbRating>
      </S.TextWrapper>
    </S.CardWrapper>
  );
};

export default Card;
