import * as S from "./styles";

import { IProps } from "./props.interface";

const Drawer: React.FC<IProps> = ({ isOpen }) => {
  return <S.Wrapper isOpen={isOpen}></S.Wrapper>;
};

export default Drawer;
