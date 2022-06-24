import { useCallback, useEffect, useMemo, useState } from "react";
import type { NextPage } from "next";

import * as S from "./styles";

import { useAppDispatch, useAppSelector } from "hooks";
import { MoviesActions, MoviesSelectors } from "store/slices/movies";
import { GenresActions, GenresSelectors } from "store/slices/genres";
import { Colors, InputSize, InputType, Status, SvgIcon } from "lib/constants";
import {
  Icon,
  Input,
  MovieCard,
  SEOHead,
  Spinner,
  Paginate,
  Text,
} from "components";

const pageMetaProps = {
  title: "Movie Browser App",
  description:
    "Movie browser app developed by Mert Helvaci and it uses the official TMDB as the source database for displaying movies.",
};

const Index: NextPage = () => {
  const dispatch = useAppDispatch();

  const moviesStatus = useAppSelector(MoviesSelectors.makeSelectMoviesStatus);
  const moviesPerPage = useAppSelector(MoviesSelectors.makeSelectMoviesPerPage);
  const totalPages = useAppSelector(MoviesSelectors.makeSelectTotalPages);
  const currentPage = useAppSelector(MoviesSelectors.makeSelectCurrentPage);
  const genresStatus = useAppSelector(GenresSelectors.makeSelectGenresStatus);
  const genres = useAppSelector(GenresSelectors.makeSelectGenres);

  const [searchedMovieTitle, setSearchedMovieTitle] = useState<string>("");
  const [isFilterApplied, setIsFilterApplied] = useState<boolean>(false);

  const handleInputValueChange = useCallback((event: React.FormEvent) => {
    const { value } = event.target as HTMLInputElement;
    setSearchedMovieTitle(value);
    if (value.trim().length !== 0) return setIsFilterApplied(true);
    setIsFilterApplied(false);
  }, []);

  const displayedMovieListPerPage = !isFilterApplied
    ? moviesPerPage
    : moviesPerPage.filter((movie: any) =>
        movie.title.toLowerCase().includes(searchedMovieTitle.toLowerCase())
      );

  useEffect(() => {
    dispatch(GenresActions.fetchGenresRequest());
    dispatch(MoviesActions.fetchMoviesPerPageRequest(currentPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const isLoading =
    moviesStatus === Status.LOADING ||
    genresStatus === Status.LOADING ||
    moviesPerPage.length === 0;

  const renderLoadingContent = (
    <>
      <SEOHead metaProps={pageMetaProps} />
      <Spinner thickness={6} />
    </>
  );

  const renderNoMovieContent = (
    <S.NoMovieContainer>
      <Icon name={SvgIcon.INFO} color={Colors.INFO} size={24} />
      <Text>No movie is found with searched title.</Text>
    </S.NoMovieContainer>
  );

  const renderPageContent = (
    <>
      <SEOHead metaProps={pageMetaProps} />
      <Input
        id="movieTitle"
        onChange={handleInputValueChange}
        placeholder="Search movie by title..."
        size={InputSize.MEDIUM}
        type={InputType.EMAIL}
        value={searchedMovieTitle}
      />
      <S.Wrapper>
        {displayedMovieListPerPage.length === 0
          ? renderNoMovieContent
          : displayedMovieListPerPage.map((movie: any) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                coverImageSrc={movie.poster_path}
                genres={movie.genre_ids.map((id: number) => genres[id]?.name)}
                rate={movie.vote_average}
                title={movie.title}
              />
            ))}
      </S.Wrapper>
      <Paginate currentPage={currentPage} totalPages={totalPages} />
    </>
  );

  return isLoading ? renderLoadingContent : renderPageContent;
};

export default Index;
