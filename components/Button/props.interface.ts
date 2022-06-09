import { ButtonSize, ButtonType } from "lib/constants";

export interface IWrapperProps {
  kind: ButtonType;
  size: ButtonSize;
}

export interface IButtonProps {
  children: React.ReactNode;
  className?: any;
  disabled?: boolean;
  kind: ButtonType;
  onClick: (e: React.FormEvent) => void;
  size: ButtonSize;
}
