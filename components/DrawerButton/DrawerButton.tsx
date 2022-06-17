import * as S from "./styles";
import { IProps } from "./props.interface";

import Icon from "../Icon";

import { ButtonSize, ButtonType, Colors, SvgIcon } from "lib/constants";

const DrawerButton: React.FC<IProps> = ({ className, onToggle }) => {
  return (
    <S.DrawerButton
      className={className}
      kind={ButtonType.GHOST}
      onClick={onToggle}
      size={ButtonSize.NOSPACE}
    >
      <Icon name={SvgIcon.BARS} color={Colors.DARK} />
    </S.DrawerButton>
  );
};

export default DrawerButton;
