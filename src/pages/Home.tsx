import React, { useEffect, useState } from "react";
import { Button, Card, FavoriteTab } from "components";
import TinderCard from "react-tinder-card";
import { useAppDispatch, useAppSelector } from "store";
import { fetchMovie } from "store/movieSlice";
import { addFavorite } from "store/favoriteSlice";
import { Logo, Profile } from "icons";
import { getLocalStorageData } from "utils/localStorage";
import * as S from "styles/pages/Home";
import { Movie } from "types/movieSlice";
import "styles/pages/tindercard-style.css";

const Home = () => {
  const [toggleTab, setToggleTab] = useState<boolean>(false);
  const [localData, setLocalData] = useState<Movie[]>([]); //i store a datas in this state
  const [index, setIndex] = useState<number>(0); // i can check the cards with this state
  const dispatch = useAppDispatch();
  const movieState = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovie());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (getLocalStorageData()) {
      //if there is a data in localstorage we take this in state.
      setLocalData(getLocalStorageData);
      getLocalStorageData().map((elm: Movie) => {
        //i map all data to dispatch and add in favorite state.
        return dispatch(addFavorite(elm));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

          {!toggleTab ? (
            <S.StyledFavorite
              onClick={() => {
                setToggleTab(!toggleTab);
              }}
            />
          ) : (
            <S.StyledSelectedFavorite
              onClick={() => {
                setToggleTab(!toggleTab);
              }}
            />
          )}
        </S.Header>
        <FavoriteTab toggleTab={!toggleTab} />
        <S.CardContainer>
          {movieState.data.items &&
            movieState.data.items
              .filter(
                //at this function i compare datas which are local and all fetched data if data which is in
                //localstorage(favorites state), i don't render in screen.
                ({ id: id1 }: Movie) =>
                  !localData?.some(({ id: id2 }: Movie) => id2 === id1)
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
