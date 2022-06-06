import Link from "next/link";

import * as S from "./styles";

import { Colors, SvgIcon } from "lib/constants";

import Icon from "../Icon";
import Text from "../Text";
import DrawerButton from "../DrawerButton";

const Header: React.FC = () => {
  return (
    <S.Header>
      <Link href="">
        <S.LogoWrapper>
          <Icon name={SvgIcon.VIDEO} color={Colors.PRIMARY} />
          <Text>MovieBrowser</Text>
        </S.LogoWrapper>
      </Link>
      <DrawerButton />
    </S.Header>
  );
};

export default Header;
