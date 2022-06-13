export interface IProps {
  isAuthenticated: boolean;
  userId: string | null;
  onLogoutUser: VoidFunction;
  onNavigateToAuthPage: VoidFunction;
  onToggle: VoidFunction;
}
