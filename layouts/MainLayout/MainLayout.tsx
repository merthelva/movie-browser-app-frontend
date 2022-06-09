import * as S from "./styles";

import IMainLayoutProps from "./props.interface";

import { useToggle } from "hooks";
import { Backdrop, DrawerButton, Drawer, Header } from "components";

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  const [isToggled, handleToggle] = useToggle();

  return (
    <>
      <Backdrop isOpen={isToggled} onDismiss={handleToggle} />
      <Drawer isOpen={isToggled} />
      <S.Wrapper>
        <Header onToggle={handleToggle} />
        <S.Main>{children}</S.Main>
      </S.Wrapper>
    </>
  );
};

export default MainLayout;
