import * as S from "./styles";

import { IProps } from "./props.interface";

import Icon from "../Icon";
import Text from "../Text";
import Button from "../Button";
import NavLink from "../NavLink";

import { ButtonSize, ButtonType, Colors, SvgIcon } from "lib/constants";

const Drawer: React.FC<IProps> = ({
  isAuthenticated,
  isOpen,
  onLogoutUser,
  onNavigateToAuthPage,
  onToggle,
}) => {
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
      {!isAuthenticated ? (
        <Button
          kind={ButtonType.PRIMARY}
          size={ButtonSize.SMALL}
          onClick={() => {
            onNavigateToAuthPage();
            onToggle();
          }}
        >
          <Icon name={SvgIcon.AUTHENTICATE} color={Colors.LIGHT} size={16} />
          <Text>SIGNUP</Text>
        </Button>
      ) : (
        <Button
          kind={ButtonType.DANGER}
          size={ButtonSize.SMALL}
          onClick={onLogoutUser}
        >
          <Icon name={SvgIcon.LOGOUT} color={Colors.LIGHT} size={16} />
          <Text>LOGOUT</Text>
        </Button>
      )}
    </S.Wrapper>
  );
};

export default Drawer;
