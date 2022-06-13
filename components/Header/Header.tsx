import { useRouter } from "next/router";
import Link from "next/link";

import * as S from "./styles";

import { IProps } from "./props.interface";

import { useAppDispatch, useAppSelector } from "hooks";
import { UserActions, UserSelectors } from "store/slices/user";
import { ButtonSize, ButtonType, Colors, SvgIcon } from "lib/constants";

import Icon from "../Icon";
import Text from "../Text";
import Button from "../Button";
import NavLink from "../NavLink";
import Container from "../Container";
import DrawerButton from "../DrawerButton";

const Header: React.FC<IProps> = ({ onToggle }) => {
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
    <S.Header>
      <Container>
        <Link href="/">
          <S.LogoWrapper>
            <Icon name={SvgIcon.VIDEO} color={Colors.PRIMARY} />
            <Text>MovieBrowser</Text>
          </S.LogoWrapper>
        </Link>
        <DrawerButton onToggle={onToggle} />
        <S.NavLinksWrapper>
          <NavLink
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
              <Icon
                name={SvgIcon.AUTHENTICATE}
                color={Colors.LIGHT}
                size={16}
              />
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
        </S.NavLinksWrapper>
      </Container>
    </S.Header>
  );
};

export default Header;
