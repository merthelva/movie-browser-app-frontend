import { useMemo } from "react";
import type { NextPage } from "next";

import * as S from "./styles";

import { wrapper } from "store";
import { handleRequest } from "services";
import { convertLongNumberToReadableFormat } from "lib/utilities";

import { IPageProps } from "./props.interface";

import { useToggle } from "hooks";
import {
  Button,
  CharacterDetail,
  Icon,
  MovieRate,
  Switch,
  Text,
} from "components";
import { ButtonSize, ButtonType, Colors, SvgIcon } from "lib/constants";

const MovieDetailsPage: NextPage<IPageProps> = ({
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
  const [isToggled, handleToggle] = useToggle();

  const numberOfCastsToBeRendered = useMemo(() => {
    return !isToggled ? 6 : movieCast.length;
  }, [isToggled, movieCast]);

  return (
    <S.Wrapper>
      <S.Details>
        <S.Body>
          <S.Content>
            <S.ContentHeader>
              <Text>{title}</Text>
              <MovieRate rate={rate} />
            </S.ContentHeader>
            <Button
              kind={ButtonType.PRIMARY}
              size={ButtonSize.MEDIUM}
              onClick={() => {}}
            >
              <Icon name={SvgIcon.BOOKMARK} color={Colors.LIGHT} size={16} />
              <Text>Add to Watchlist</Text>
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
    </S.Wrapper>
  );
};

export const getStaticPaths = async () => {
  const response: any = await handleRequest({
    url: "/movie/popular",
  });

  const paths = response.data.results.map((movie: any) => ({
    params: { id: movie.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      const { data: movieDetailsData }: any = await handleRequest({
        url: `/movie/${params!.id}`,
      });

      const {
        data: { backdrops: movieImagesData },
      }: any = await handleRequest({
        url: `/movie/${params!.id}/images`,
      });
      const imageGallery = movieImagesData.map((image: any) => image.file_path);

      const {
        data: { cast: movieCastData },
      }: any = await handleRequest({
        url: `/movie/${params!.id}/credits`,
      });
      const movieCast = movieCastData.map((person: any) => ({
        id: person.id,
        name: person.name,
        avatar: person.profile_path,
        character: person.character,
      }));

      // TODO: all these 3 API requests may be collected under one Promise.all call for better performance

      return {
        props: {
          coverImageSrc: movieDetailsData.poster_path,
          budget: movieDetailsData.budget,
          overview: movieDetailsData.overview,
          releaseDate: movieDetailsData.release_date,
          duration: movieDetailsData.runtime,
          title: movieDetailsData.title,
          rate: movieDetailsData.vote_average,
          imageGallery,
          movieCast,
        },
      };
    }
);

export default MovieDetailsPage;
