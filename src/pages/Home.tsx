import React, { useEffect, useState } from "react";
import { Button, Card, FavoriteTab } from "components";
import TinderCard from "react-tinder-card";
import { useAppDispatch, useAppSelector } from "store";
import { fetchMovie } from "store/movieSlice";
import { addFavorite } from "store/favoriteSlice";
import { Logo, Profile } from "icons";
import * as S from "styles/pages/Home";
import { Movie } from "types/movieSlice";
import "styles/pages/tindercard-style.css";
import { data } from "utils/localStorage";

const Home = () => {
  const [toggleTab, setToggleTab] = useState<boolean>(true);
  const [localData, setLocalData] = useState<any>([]); //i store a datas in this state
  const [index, setIndex] = useState<number>(0); // i can check the cards with this state
  const dispatch = useAppDispatch();
  const movieState = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovie());
  }, []);

  useEffect(() => {
    if (data) {
      //if there is a data in localstorage we take this in state.
      setLocalData(data);
      data.map((elm: Movie) => {
        //i map all data to dispatch and add in favorite state.
        return dispatch(addFavorite(elm));
      });
    }
  }, []);

  const onCardLeftScreen = () => {
    setIndex(index + 1);
  };
  return (
    <S.Container>
      <S.MainWrapper>
        <S.Header>
          <Profile />
          <Logo />
          <S.StyledFavorite
            onClick={() => {
              setToggleTab(!toggleTab);
            }}
          />
        </S.Header>
        <FavoriteTab toggleTab={toggleTab} />
        <S.CardContainer>
          {movieState.data.items &&
            movieState.data.items
              .filter(
                //at this function i compare datas which are local and all fetched data if data which is in
                //localstorage(favorites state), i don't render in screen.
                ({ id: id1 }) =>
                  !localData?.some(({ id: id2 }: any) => id2 === id1)
              )
              .map((movie: Movie, key) => {
                return (
                  <React.Fragment key={key}>
                    {index === key && (
                      <TinderCard
                        className="swipe"
                        onSwipe={(dir) => {
                          if (dir === "right") {
                            dispatch(addFavorite(movie));
                          }
                        }}
                        onCardLeftScreen={onCardLeftScreen}
                        preventSwipe={["up", "down"]}
                      >
                        <Card {...movie} />
                      </TinderCard>
                    )}
                  </React.Fragment>
                );
              })}
        </S.CardContainer>
        <Button />
      </S.MainWrapper>
    </S.Container>
  );
};

export default Home;
