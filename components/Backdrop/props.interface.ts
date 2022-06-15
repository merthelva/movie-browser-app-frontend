import { BackdropType } from "lib/constants";

export interface IBackdropProps {
  onDismiss?: VoidFunction;
  isOpen: boolean;
  type?: BackdropType;
}

export interface IWrapperProps {
  type?: BackdropType;
}
