import { InputSize, InputType } from "lib/constants";

export interface IProps {
  errorMsg?: string;
  hasClear?: boolean;
  id: string;
  isAutoFocused?: boolean;
  label: string;
  onChange?: (e: React.FormEvent) => void;
  placeholder?: string;
  size?: InputSize;
  type?: InputType;
  value?: string;
}

export interface IWrapperProps {
  size?: InputSize;
}

export interface IInputProps {
  hasError?: boolean;
  size?: InputSize;
}
