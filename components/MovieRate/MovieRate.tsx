import * as S from "./styles";

import { IProps } from "./props.interface";

import Text from "../Text";

const MovieRate: React.FC<IProps> = ({ rate }) => {
  return (
    <S.MovieRate>
      <Text>{rate.toFixed(1)}</Text>
    </S.MovieRate>
  );
};

export default MovieRate;
