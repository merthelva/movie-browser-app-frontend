import { InputSize, InputType, InputVariants } from "lib/constants";

export interface IProps {
  errorMsg?: string;
  hasClear?: boolean;
  id: string;
  isAutoFocused?: boolean;
  label?: string;
  onChange?: (e: React.FormEvent) => void;
  handleClearInput?: (id: string) => void;
  placeholder?: string;
  size?: InputSize;
  type?: InputType;
  value?: string;
  variant?: InputVariants;
}

export interface IWrapperProps {
  size?: InputSize;
}

export interface IInputProps {
  hasClear?: boolean;
  hasError?: boolean;
  size?: InputSize;
  variant?: InputVariants;
}
