export interface IProps {
  isAuthenticated: boolean;
  onLogoutUser: VoidFunction;
  onNavigateToAuthPage: VoidFunction;
  onToggle: VoidFunction;
}
