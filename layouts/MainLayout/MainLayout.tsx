import { useRouter } from "next/router";

import * as S from "./styles";

import IMainLayoutProps from "./props.interface";

import { UserActions, UserSelectors } from "store/slices/user";
import { useAppDispatch, useAppSelector, useToggle } from "hooks";
import { Backdrop, Container, Drawer, Header } from "components";

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(
    UserSelectors.makeSelectIsAuthenticated
  );

  const [isToggled, handleToggle] = useToggle();

  const handleNavigateToAuthPage = () => {
    //handleToggle();
    router.push("/auth", "/auth/signup");
  };

  const handleLogoutUser = () => {
    dispatch(UserActions.logoutRequest());
    window.location.reload();
  };

  return (
    <>
      <Backdrop isOpen={isToggled} onDismiss={handleToggle} />
      <Drawer
        isAuthenticated={isAuthenticated}
        isOpen={isToggled}
        onLogoutUser={handleLogoutUser}
        onNavigateToAuthPage={handleNavigateToAuthPage}
        onToggle={handleToggle}
      />
      <S.Wrapper>
        <Header
          isAuthenticated={isAuthenticated}
          onLogoutUser={handleLogoutUser}
          onNavigateToAuthPage={handleNavigateToAuthPage}
          onToggle={handleToggle}
        />
        <S.Main>
          <Container>{children}</Container>
        </S.Main>
      </S.Wrapper>
    </>
  );
};

export default MainLayout;
