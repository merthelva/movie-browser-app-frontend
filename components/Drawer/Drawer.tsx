import { useRouter } from "next/router";

import * as S from "./styles";

import { IProps } from "./props.interface";

import Icon from "../Icon";
import Text from "../Text";
import Button from "../Button";
import NavLink from "../NavLink";

import { useAppDispatch, useAppSelector } from "hooks";
import { UserActions, UserSelectors } from "store/slices/user";
import { ButtonSize, ButtonType, Colors, SvgIcon } from "lib/constants";

const Drawer: React.FC<IProps> = ({ isOpen, onToggle }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(
    UserSelectors.makeSelectIsAuthenticated
  );

  const handleNavigateToAuthPage = () => router.push("/auth", "/auth/signup");

  const handleLogoutUser = () => {
    dispatch(UserActions.logoutRequest());
    window.location.reload();
  };

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
          onClick={handleNavigateToAuthPage}
        >
          <Icon name={SvgIcon.AUTHENTICATE} color={Colors.LIGHT} size={16} />
          <Text>SIGNUP</Text>
        </Button>
      ) : (
        <Button
          kind={ButtonType.DANGER}
          size={ButtonSize.SMALL}
          onClick={handleLogoutUser}
        >
          <Icon name={SvgIcon.LOGOUT} color={Colors.LIGHT} size={16} />
          <Text>LOGOUT</Text>
        </Button>
      )}
    </S.Wrapper>
  );
};

export default Drawer;
