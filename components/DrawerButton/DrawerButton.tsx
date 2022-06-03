import * as S from "./styles";

import Icon from "../Icon";

import { Colors, SvgIcon } from "lib/constants";

const DrawerButton: React.FC = () => {
  return (
    <S.Wrapper>
      <Icon name={SvgIcon.BARS} color={Colors.LIGHT} />
    </S.Wrapper>
  );
};

export default DrawerButton;
