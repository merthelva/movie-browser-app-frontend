export interface IProps {
  isAuthenticated: boolean;
  isOpen: boolean;
  userId: string | null;
  onLogoutUser: VoidFunction;
  onNavigateToAuthPage: VoidFunction;
  onToggle: VoidFunction;
}

export interface IWrapperProps {
  isOpen: boolean;
}
