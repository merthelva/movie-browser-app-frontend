import { ButtonSize, ButtonType } from "lib/constants";

export interface IWrapperProps {
  kind: ButtonType;
  size: ButtonSize;
}

export interface IButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  kind: ButtonType;
  onClick: VoidFunction;
  size: ButtonSize;
}
