/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useMemo } from "react";
import type { NextPage } from "next";

import * as S from "./styles";
import { IPageProps } from "./props.interface";

import { handleRequest } from "services";
import { wrapper, ISagaStore, END } from "store";
import { convertLongNumberToReadableFormat } from "lib/utilities";
import { UserActions, UserSelectors, IWatchlistMovie } from "store/slices/user";
import { useAppDispatch, useAppSelector, useIsMounted, useToggle } from "hooks";
import {
  ButtonSize,
  ButtonType,
  Colors,
  NotificationType,
  Status,
  SvgIcon,
} from "lib/constants";
import {
  Button,
  CharacterDetail,
  Icon,
  ImageGallery,
  MovieRate,
  Notification,
  Spinner,
  Switch,
  Text,
} from "components";

const MovieDetailsPage: NextPage<IPageProps> = ({
  id,
  coverImageSrc,
  budget,
  overview,
  releaseDate,
  duration,
  title,
  rate,
  imageGallery,
  movieCast,
}) => {
  const dispatch = useAppDispatch();

  const userId = useAppSelector(UserSelectors.makeSelectUserId);
  const watchlistStatus = useAppSelector(UserSelectors.makeSelectUserStatus);
  const watchlist = useAppSelector(UserSelectors.makeSelectUserWatchlist);
  const errors = useAppSelector(UserSelectors.makeSelectUserError);

  const isMounted = useIsMounted();
  const [isToggled, handleToggle] = useToggle();

  const isMovieInWatchlist = useMemo(() => {
    return !!watchlist.find((movie: IWatchlistMovie) => movie.id === id);
  }, [id, watchlist]);

  const numberOfCastsToBeRendered = useMemo(() => {
    return !isToggled ? 6 : movieCast.length;
  }, [isToggled, movieCast]);

  const handleAddMovieToWatchlist = () => {
    if (!isMovieInWatchlist) {
      const movie = {
        id,
        budget,
        releaseDate,
        duration,
        title,
        rate,
      };

      dispatch(UserActions.addMovieToWatchlistRequest(movie, userId));
    }
  };

  const handleRemoveMovieFromWatchlist = useCallback(() => {
    dispatch(UserActions.removeMovieFromWatchlistRequest(id, userId));
  }, [id, userId]);

  const handleToggleMovieInWatchlist = useCallback(
    () =>
      isMovieInWatchlist
        ? handleRemoveMovieFromWatchlist()
        : handleAddMovieToWatchlist(),
    [isMovieInWatchlist]
  );

  if (!isMounted) return null;

  const renderMovieDetails = (
    <S.Details>
      <S.Body>
        <S.Content isLoading={watchlistStatus === Status.LOADING}>
          <S.ContentHeader>
            <Text>{title}</Text>
            <MovieRate rate={rate} />
          </S.ContentHeader>
          <Button
            kind={ButtonType.PRIMARY}
            size={ButtonSize.MEDIUM}
            onClick={handleToggleMovieInWatchlist}
          >
            {watchlistStatus === Status.LOADING ? (
              <Spinner size={14} thickness={3} />
            ) : (
              <Icon
                name={
                  isMovieInWatchlist
                    ? SvgIcon.BOOKMARK_FILLED
                    : SvgIcon.BOOKMARK_OUTLINED
                }
                color={Colors.LIGHT}
                size={16}
              />
            )}
            <Text>{`${
              isMovieInWatchlist ? "Remove from" : "Add to"
            } Watchlist`}</Text>
          </Button>
          <Text>{overview}</Text>
        </S.Content>
        <S.PosterWrapper>
          <S.Poster
            alt={title}
            width={300}
            height={450}
            objectFit="cover"
            src={`https://image.tmdb.org/t/p/w300/${coverImageSrc}`}
          />
        </S.PosterWrapper>
        <S.Footer>
          <S.FooterInfo>
            <Icon name={SvgIcon.CLOCK} color={Colors.LIGHT} size={20} />
            <Text>{releaseDate}</Text>
          </S.FooterInfo>
          <S.FooterInfo>
            <Icon name={SvgIcon.HISTORY} color={Colors.LIGHT} size={20} />
            <Text>{duration} min.</Text>
          </S.FooterInfo>
          <S.FooterInfo>
            <Icon name={SvgIcon.MONEY} color={Colors.LIGHT} size={20} />
            <Text>$ {convertLongNumberToReadableFormat(budget, {})}</Text>
          </S.FooterInfo>
        </S.Footer>
      </S.Body>
    </S.Details>
  );

  const renderActors = (
    <S.Actors>
      <S.ActorsHeader>
        <Text>ACTORS</Text>
        <S.SwitchWrapper>
          <Switch isToggled={isToggled} onToggle={handleToggle} />
          <Text>Show all</Text>
        </S.SwitchWrapper>
      </S.ActorsHeader>
      <S.CastWrapper>
        {movieCast.slice(0, numberOfCastsToBeRendered).map((person: any) => {
          if (!person.avatar) return null;
          return (
            <CharacterDetail
              key={person.id}
              avatarSrc={person.avatar}
              name={person.name}
              character={person.character}
            />
          );
        })}
      </S.CastWrapper>
    </S.Actors>
  );

  const renderImageGallery = <ImageGallery imageSources={imageGallery} />;

  return (
    <>
      <Notification
        isOpen={errors && Object.keys(errors).length > 0}
        kind={NotificationType.WARNING}
        notificationText={errors?.userId.message}
      />
      <S.Wrapper>
        {renderMovieDetails}
        {renderActors}
        {renderImageGallery}
      </S.Wrapper>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      store.getState().user.isAuthenticated &&
        store.dispatch(
          UserActions.fetchWatchlistRequest(store.getState().user.userId)
        );

      const movieDetailsDataPromise = new Promise((resolve) => {
        handleRequest({
          url: `/movie/${params!.id}`,
        }).then(({ data: movieDetailsData }: any) => resolve(movieDetailsData));
      });

      const movieImagesDataPromise = new Promise((resolve) => {
        handleRequest({
          url: `/movie/${params!.id}/images`,
        }).then(({ data: { backdrops: movieImagesData } }: any) => {
          const imageGallery = movieImagesData.map(
            (image: any) => image.file_path
          );
          resolve(imageGallery);
        });
      });

      const movieCastDataPromise = new Promise((resolve) => {
        handleRequest({
          url: `/movie/${params!.id}/credits`,
        }).then(({ data: { cast: movieCastData } }: any) => {
          const movieCast = movieCastData.map((person: any) => ({
            id: person.id,
            name: person.name,
            avatar: person.profile_path,
            character: person.character,
          }));
          resolve(movieCast);
        });
      });

      const promises = [
        movieDetailsDataPromise,
        movieImagesDataPromise,
        movieCastDataPromise,
      ];

      const [movieDetailsData, imageGallery, movieCast]: any[] =
        await Promise.all(promises);

      store.dispatch(END);
      await (store as ISagaStore).sagaTask!.toPromise();

      return {
        props: {
          id: params!.id,
          coverImageSrc: movieDetailsData.poster_path,
          budget: movieDetailsData.budget,
          overview: movieDetailsData.overview,
          releaseDate: movieDetailsData.release_date,
          duration: movieDetailsData.runtime,
          title: movieDetailsData.title,
          rate: movieDetailsData.vote_average,
          imageGallery,
          movieCast,
          meta: {
            title: movieDetailsData.title,
            description: movieDetailsData.overview,
          },
        },
      };
    }
);

export default MovieDetailsPage;
