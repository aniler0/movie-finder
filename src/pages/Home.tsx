import { Card } from "components";
import TinderCard from "react-tinder-card";
import { Favorite, Logo, Profile } from "icons";
import * as S from "styles/pages/Home";
import Button from "components/Button/Button";
import { useAppDispatch, useAppSelector } from "store";
import { useEffect } from "react";
import { fetchMovie, User } from "store/movieSlice";
import "styles/pages/tindercard-style.css";

const Home = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.movies);

  const onCardLeftScreen = (user: User) => {
    console.log("User:" + user.firstName);
  };

  useEffect(() => {
    dispatch(fetchMovie());
  }, []);
  const movies = state.data?.data;
  return (
    <S.Container>
      <S.MainWrapper>
        <S.Header>
          <Profile />
          <Logo />
          <Favorite />
        </S.Header>
        <S.CardContainer>
          {movies?.map((user, key) => {
            return (
              <TinderCard
                className="swipe"
                key={key}
                onCardLeftScreen={() => onCardLeftScreen(user)}
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
