import { InputSize, InputType } from "lib/constants";

export interface IProps {
  alignment?: string;
  errorMsg?: string;
  hasClear?: boolean;
  id: string;
  isAutoFocused?: boolean;
  label: string;
  placeholder?: string;
  size?: InputSize;
  type?: InputType;
}

export interface IWrapperProps {
  alignment: string;
  size?: InputSize;
}

export interface IInputProps {
  hasError?: boolean;
  size?: InputSize;
}
