import * as S from "./styles";

import IMainLayoutProps from "./props.interface";

import { useToggle } from "hooks";
import { Backdrop, Container, Drawer, Header } from "components";

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  const [isToggled, handleToggle] = useToggle();

  return (
    <>
      <Backdrop isOpen={isToggled} onDismiss={handleToggle} />
      <Drawer isOpen={isToggled} onToggle={handleToggle} />
      <S.Wrapper>
        <Header onToggle={handleToggle} />
        <S.Main>
          <Container>{children}</Container>
        </S.Main>
      </S.Wrapper>
    </>
  );
};

export default MainLayout;
