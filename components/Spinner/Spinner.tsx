import * as S from "./styles";

import { ISpinnerProps } from "./props.interface";

import { Colors } from "lib/constants";

const Spinner: React.FC<ISpinnerProps> = ({
  size = 32,
  color = Colors.PRIMARY,
}) => {
  return <S.Wrapper size={size} color={color} />;
};

export default Spinner;
