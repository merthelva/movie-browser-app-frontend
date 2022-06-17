import * as S from "./styles";
import { IProps } from "./props.interface";

const Container: React.FC<IProps> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default Container;
