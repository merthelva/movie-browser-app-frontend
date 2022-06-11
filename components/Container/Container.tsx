import * as S from "./styles";

import { IProps } from "./props.interface";

const Container: React.FC<IProps> = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Container;
