import { useRouter } from "next/router";

import * as S from "./styles";

import { IProps } from "./props.interface";

import Icon from "../Icon";
import Text from "../Text";
import Button from "../Button";
import NavLink from "../NavLink";

import { ButtonSize, ButtonType, Colors, SvgIcon } from "lib/constants";

const Drawer: React.FC<IProps> = ({ isOpen, onToggle }) => {
  const router = useRouter();

  const handleNavigateToAuthPage = () =>
    router.replace("/auth", "/auth/signup");

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
        onClick={handleNavigateToAuthPage}
      >
        <Icon name={SvgIcon.AUTHENTICATE} color={Colors.LIGHT} size={16} />
        <Text>SIGNUP</Text>
      </Button>
    </S.Wrapper>
  );
};

export default Drawer;
