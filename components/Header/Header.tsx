import Link from "next/link";

import * as S from "./styles";
import { IProps } from "./props.interface";

import Icon from "../Icon";
import Text from "../Text";
import Button from "../Button";
import NavLink from "../NavLink";
import Container from "../Container";
import DrawerButton from "../DrawerButton";

import { ButtonSize, ButtonType, Colors, SvgIcon } from "lib/constants";

const Header: React.FC<IProps> = ({
  isAuthenticated,
  userId,
  onLogoutUser,
  onNavigateToAuthPage,
  onToggle,
}) => {
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
          {isAuthenticated && (
            <NavLink
              prefixIcon={{
                color: Colors.SECONDARY,
                name: SvgIcon.LIST,
                size: 20,
              }}
              text="Watchlist"
              to={`/${userId}/watchlist`}
            />
          )}
          {!isAuthenticated ? (
            <Button
              kind={ButtonType.PRIMARY}
              size={ButtonSize.SMALL}
              onClick={onNavigateToAuthPage}
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
              onClick={onLogoutUser}
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
