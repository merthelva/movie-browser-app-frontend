import * as S from "./styles";

import { IProps } from "./props.interface";

import Icon from "../Icon";
import Text from "../Text";
import Button from "../Button";
import NavLink from "../NavLink";

import { ButtonSize, ButtonType, Colors, SvgIcon } from "lib/constants";

const Drawer: React.FC<IProps> = ({ isOpen, onToggle }) => {
  return (
    <S.Wrapper isOpen={isOpen}>
      <Button
        kind={ButtonType.GHOST}
        size={ButtonSize.NOSPACE}
        onClick={onToggle}
      >
        <Icon name={SvgIcon.CANCEL} color={Colors.SECONDARY} />
      </Button>
      <NavLink
        onCloseDrawer={onToggle}
        prefixIcon={{
          color: Colors.SECONDARY,
          name: SvgIcon.MOVIE,
          size: 20,
        }}
        text="Movies"
        to="/"
      />
      <Button
        kind={ButtonType.PRIMARY}
        size={ButtonSize.SMALL}
        onClick={() => {}}
      >
        <Icon name={SvgIcon.AUTHENTICATE} color={Colors.LIGHT} size={16} />
        <Text>LOGIN</Text>
      </Button>
    </S.Wrapper>
  );
};

export default Drawer;
