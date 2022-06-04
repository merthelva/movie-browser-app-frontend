import * as S from "./styles";

import { IMovieCard } from "./props.interface";

import MovieRate from "../MovieRate";
import Text from "../Text";

const MovieCard: React.FC<IMovieCard> = () => {
  return (
    <S.Wrapper>
      <S.Poster
        alt=""
        width={600}
        height={500}
        objectFit="cover"
        src="https://image.tmdb.org/t/p/w300/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg"
      />
      <S.DetailsWrapper>
        <S.TextWrapper>
          <Text>Fantastic Beasts: The Secrets of Dumbledore</Text>
          <Text>Fantasy, Adventure, Action</Text>
        </S.TextWrapper>
        <MovieRate rate={7.5} />
      </S.DetailsWrapper>
    </S.Wrapper>
  );
};

export default MovieCard;
