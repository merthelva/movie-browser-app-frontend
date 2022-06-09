import * as S from "./styles";

import Icon from "../Icon";

import { IProps } from "./props.interface";

import { ButtonSize, ButtonType, Colors, SvgIcon } from "lib/constants";

const DrawerButton: React.FC<IProps> = ({ onToggle }) => {
  return (
    <S.Wrapper
      kind={ButtonType.GHOST}
      onClick={onToggle}
      size={ButtonSize.NOSPACE}
    >
      <Icon name={SvgIcon.BARS} color={Colors.DARK} />
    </S.Wrapper>
  );
};

export default DrawerButton;
