import * as S from "./styles";

import { IProps } from "./props.interface";

import Icon from "../Icon";
import Button from "../Button";

import { ButtonSize, ButtonType, Colors, SvgIcon } from "lib/constants";

const Drawer: React.FC<IProps> = ({ isOpen, onToggle }) => {
  return (
    <S.Wrapper isOpen={isOpen}>
      <Button
        kind={ButtonType.GHOST}
        size={ButtonSize.NOSPACE}
        onClick={onToggle}
      >
        <Icon name={SvgIcon.CANCEL} color={Colors.SECONDARY} />{" "}
      </Button>
    </S.Wrapper>
  );
};

export default Drawer;
