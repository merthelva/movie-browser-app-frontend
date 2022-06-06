import { useEffect } from "react";
import type { NextPage, GetStaticProps, GetStaticPropsContext } from "next";

import * as S from "./styles";

import { Status } from "lib/constants";
import { MovieCard, Spinner } from "components";
import { customGetStaticProps } from "store";
import { useAppDispatch, useAppSelector } from "hooks";
import { MoviesActions, MoviesSelectors } from "store/slices/movies";
import { GenresActions, GenresSelectors } from "store/slices/genres";

const Index: NextPage = () => {
  const dispatch = useAppDispatch();
  const moviesStatus = useAppSelector(MoviesSelectors.makeSelectMoviesStatus);
  const moviesPerPage = useAppSelector(MoviesSelectors.makeSelectMoviesPerPage);
  const genresStatus = useAppSelector(GenresSelectors.makeSelectGenresStatus);
  const genres = useAppSelector(GenresSelectors.makeSelectGenres);

  useEffect(() => {
    dispatch(MoviesActions.fetchMoviesPerPageRequest());
    dispatch(GenresActions.fetchGenresRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isLoading =
    moviesStatus === Status.LOADING || genresStatus === Status.LOADING;

  return isLoading ? (
    <Spinner />
  ) : (
    <S.Wrapper>
      {moviesPerPage.map((movie: any) => (
        <MovieCard
          key={movie.id}
          coverImageSrc={movie.poster_path}
          genres={movie.genre_ids.map((id: number) => genres[id].name)}
          rate={movie.vote_average}
          title={movie.title}
        />
      ))}
    </S.Wrapper>
  );
};

/* export const getStaticProps: GetStaticProps = customGetStaticProps(
  async (context: GetStaticPropsContext) => {
    console.log("Index page getStaticProps:", context);
  }
); */

export default Index;
