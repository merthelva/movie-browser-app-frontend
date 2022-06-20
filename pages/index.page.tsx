import { useEffect } from "react";
import type { NextPage } from "next";

import * as S from "./styles";

import { Status } from "lib/constants";
import { useAppDispatch, useAppSelector } from "hooks";
import { MovieCard, SEOHead, Spinner, Paginate } from "components";
import { MoviesActions, MoviesSelectors } from "store/slices/movies";
import { GenresActions, GenresSelectors } from "store/slices/genres";

const pageMetaProps = {
  title: "Movie Browser App",
  description:
    "Movie browser app developed by Mert Helvaci and it uses the official TMDB as the source database for displaying movies.",
};

const Index: NextPage = () => {
  const dispatch = useAppDispatch();

  const moviesStatus = useAppSelector(MoviesSelectors.makeSelectMoviesStatus);
  const moviesPerPage = useAppSelector(MoviesSelectors.makeSelectMoviesPerPage);
  const currentPage = useAppSelector(MoviesSelectors.makeSelectCurrentPage);
  const genresStatus = useAppSelector(GenresSelectors.makeSelectGenresStatus);
  const genres = useAppSelector(GenresSelectors.makeSelectGenres);

  useEffect(() => {
    dispatch(GenresActions.fetchGenresRequest());
    dispatch(MoviesActions.fetchMoviesPerPageRequest(currentPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const isLoading =
    moviesStatus === Status.LOADING ||
    genresStatus === Status.LOADING ||
    moviesPerPage.length === 0;

  return isLoading ? (
    <>
      <SEOHead metaProps={pageMetaProps} />
      <Spinner thickness={6} />
    </>
  ) : (
    <>
      <SEOHead metaProps={pageMetaProps} />
      <S.Wrapper>
        {moviesPerPage.map((movie: any) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            coverImageSrc={movie.poster_path}
            genres={movie.genre_ids.map((id: number) => genres[id].name)}
            rate={movie.vote_average}
            title={movie.title}
          />
        ))}
      </S.Wrapper>
      <Paginate currentPage={currentPage} />
    </>
  );
};

export default Index;
