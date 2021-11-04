import { User } from "store/movieSlice";
import * as S from "./style";

interface user {
  user: User;
}

const Card = ({ user }: user) => {
  return (
    <S.CardWrapper url={user.picture}>
      <S.TextWrapper>
        <S.Name>{user.firstName}</S.Name>
        <S.Country>{user.title}</S.Country>
        <S.Genre>{user.id}</S.Genre>
      </S.TextWrapper>
    </S.CardWrapper>
  );
};

export default Card;
