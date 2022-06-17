import Link from "next/link";

import * as S from "./styles";

import { IProps } from "./props.interface";

import MovieRate from "../MovieRate";
import Text from "../Text";

const MovieCard: React.FC<IProps> = ({
  coverImageSrc,
  genres,
  id,
  title,
  rate,
}) => {
  return (
    <Link href={`/movies/${id}`}>
      <S.MovieCard>
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
      </S.MovieCard>
    </Link>
  );
};

export default MovieCard;
