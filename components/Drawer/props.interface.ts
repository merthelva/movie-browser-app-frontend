export interface IProps {
  isAuthenticated: boolean;
  isOpen: boolean;
  onLogoutUser: VoidFunction;
  onNavigateToAuthPage: VoidFunction;
  onToggle: VoidFunction;
}

export interface IWrapperProps {
  isOpen: boolean;
}
