import Link from "next/link";

import * as S from "./styles";

import { IProps } from "./props.interface";

import Icon from "../Icon";
import Text from "../Text";

const NavLink: React.FC<IProps> = ({ onCloseDrawer, prefixIcon, text, to }) => {
  return (
    <Link href={to}>
      <S.Wrapper onClick={onCloseDrawer}>
        {prefixIcon && (
          <Icon
            name={prefixIcon.name}
            color={prefixIcon.color}
            size={prefixIcon.size}
          />
        )}
        <Text>{text}</Text>
      </S.Wrapper>
    </Link>
  );
};

export default NavLink;
