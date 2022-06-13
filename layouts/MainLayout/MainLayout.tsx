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
  const userId = useAppSelector(UserSelectors.makeSelectUserId);

  const [isToggled, handleToggle] = useToggle();

  const handleNavigateToAuthPage = () => {
    router.push("/auth", "/auth/signup");
  };

  const handleLogoutUser = () => {
    dispatch(UserActions.logoutRequest());
    router.replace("/");
  };

  return (
    <>
      <Backdrop isOpen={isToggled} onDismiss={handleToggle} />
      <Drawer
        isAuthenticated={isAuthenticated}
        isOpen={isToggled}
        userId={userId}
        onLogoutUser={handleLogoutUser}
        onNavigateToAuthPage={handleNavigateToAuthPage}
        onToggle={handleToggle}
      />
      <Header
        isAuthenticated={isAuthenticated}
        userId={userId}
        onLogoutUser={handleLogoutUser}
        onNavigateToAuthPage={handleNavigateToAuthPage}
        onToggle={handleToggle}
      />
      <S.Main>
        <Container>{children}</Container>
      </S.Main>
    </>
  );
};

export default MainLayout;
