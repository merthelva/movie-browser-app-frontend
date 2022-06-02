import * as S from "./styles";

import IMainLayoutProps from "./props.interface";

import { Header } from "components";

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  return (
    <S.Wrapper>
      <Header />
      <S.Main>{children}</S.Main>
    </S.Wrapper>
  );
};

export default MainLayout;
