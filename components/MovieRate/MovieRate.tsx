import * as S from "./styles";

import { IMovieRate } from "./props.interface";

import Text from "../Text";

const MovieRate: React.FC<IMovieRate> = ({ rate }) => {
  return (
    <S.Wrapper>
      <Text>{rate.toFixed(1)}</Text>
    </S.Wrapper>
  );
};

export default MovieRate;
