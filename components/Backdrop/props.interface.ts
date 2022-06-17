import { BackdropType } from "lib/constants";

export interface IProps {
  onDismiss?: VoidFunction;
  isOpen: boolean;
  type?: BackdropType;
}

export interface IWrapperProps {
  type?: BackdropType;
}
