import Link from "next/link";

import * as S from "./styles";

import { IProps } from "./props.interface";

import { Colors, SvgIcon } from "lib/constants";

import Icon from "../Icon";
import Text from "../Text";
import NavLink from "../NavLink";
import DrawerButton from "../DrawerButton";

const Header: React.FC<IProps> = ({ onToggle }) => {
  return (
    <S.Header>
      <Link href="">
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
      </S.NavLinksWrapper>
    </S.Header>
  );
};

export default Header;
