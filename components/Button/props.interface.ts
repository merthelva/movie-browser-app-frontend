import { ButtonSize, ButtonType } from "lib/constants";

export interface IWrapperProps {
  kind: ButtonType;
  size: ButtonSize;
}

export interface IProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  kind: ButtonType;
  onClick: (e: React.FormEvent) => void;
  size: ButtonSize;
}
