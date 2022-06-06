import Link from "next/link";

import * as S from "./styles";

import { IMovieCard } from "./props.interface";

import MovieRate from "../MovieRate";
import Text from "../Text";

const MovieCard: React.FC<IMovieCard> = ({
  coverImageSrc,
  genres,
  title,
  rate,
}) => {
  return (
    <Link href="/">
      <S.Wrapper>
        <S.Poster
          alt={title}
          width={600}
          height={500}
          objectFit="cover"
          src={`https://image.tmdb.org/t/p/w300/${coverImageSrc}`}
        />
        <S.DetailsWrapper>
          <S.TextWrapper>
            <Text>{title}</Text>
            <Text>{genres.join(", ")}</Text>
          </S.TextWrapper>
          <MovieRate rate={rate} />
        </S.DetailsWrapper>
      </S.Wrapper>
    </Link>
  );
};

export default MovieCard;
