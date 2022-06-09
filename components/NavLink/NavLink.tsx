import Link from "next/link";

import * as S from "./styles";

import { IProps } from "./props.interface";

import Icon from "../Icon";
import Text from "../Text";

const NavLink: React.FC<IProps> = ({ prefixIcon, text, to }) => {
  return (
    <Link href={to}>
      <S.Wrapper>
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
