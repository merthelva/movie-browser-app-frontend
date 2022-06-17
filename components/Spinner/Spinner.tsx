import * as S from "./styles";

import { IProps } from "./props.interface";

import { Colors } from "lib/constants";

const Spinner: React.FC<IProps> = ({
  size = 32,
  color = Colors.PRIMARY,
  thickness = 2,
}) => {
  return <S.Spinner size={size} color={color} thickness={thickness} />;
};

export default Spinner;
