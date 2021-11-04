import { useEffect, useState } from "react";
import { Button, Card, FavoriteTab } from "components";
import TinderCard from "react-tinder-card";
import { useAppDispatch, useAppSelector } from "store";
import { Logo, Profile } from "icons";
import * as S from "styles/pages/Home";
import { fetchMovie } from "store/movieSlice";
import { addFavorite } from "store/favoriteSlice";
import "styles/pages/tindercard-style.css";

const Home = () => {
  const [toggleTab, setToggleTab] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const movieState = useAppSelector((state) => state.movies);
  const favoriteState = useAppSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(fetchMovie());
  }, []);
  return (
    <S.Container>
      <S.MainWrapper>
        <S.Header>
          <Profile />
          <Logo />
          <S.StyledFavorite
            onClick={() => {
              setToggleTab(!toggleTab);
              console.log(favoriteState);
            }}
          />
        </S.Header>
        <FavoriteTab toggleTab={toggleTab} />
        <S.CardContainer>
          {movieState.data?.data.map((user, key) => {
            return (
              <TinderCard
                className="swipe"
                key={key}
                onSwipe={(dir) => {
                  if (dir === "right") dispatch(addFavorite(user));
                }}
                preventSwipe={["up", "down"]}
              >
                <Card user={user} />
              </TinderCard>
            );
          })}
        </S.CardContainer>
        <Button />
      </S.MainWrapper>
    </S.Container>
  );
};

export default Home;
