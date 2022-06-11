import * as S from "./styles";

import { ISpinnerProps } from "./props.interface";

import { Colors } from "lib/constants";

const Spinner: React.FC<ISpinnerProps> = ({
  size = 32,
  color = Colors.PRIMARY,
  thickness = 2,
}) => {
  return <S.Wrapper size={size} color={color} thickness={thickness} />;
};

export default Spinner;
