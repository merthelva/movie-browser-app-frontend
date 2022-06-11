import { useRouter } from "next/router";
import Link from "next/link";

import * as S from "./styles";

import { IProps } from "./props.interface";

import { ButtonSize, ButtonType, Colors, SvgIcon } from "lib/constants";

import Icon from "../Icon";
import Text from "../Text";
import Button from "../Button";
import NavLink from "../NavLink";
import Container from "../Container";
import DrawerButton from "../DrawerButton";

const Header: React.FC<IProps> = ({ onToggle }) => {
  const router = useRouter();

  const handleNavigateToAuthPage = () =>
    router.replace("/auth", "/auth/signup");

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
          <Button
            kind={ButtonType.PRIMARY}
            size={ButtonSize.SMALL}
            onClick={handleNavigateToAuthPage}
          >
            <Icon name={SvgIcon.AUTHENTICATE} color={Colors.LIGHT} size={16} />
            <Text>SIGNUP</Text>
          </Button>
        </S.NavLinksWrapper>
      </Container>
    </S.Header>
  );
};

export default Header;
