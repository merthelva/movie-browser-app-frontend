import { Dispatch, SetStateAction } from "react";

export interface IFormWrapperProps {
  isLoading?: boolean;
}

export interface IFieldSetterMap {
  [key: string]: Dispatch<SetStateAction<string>>;
}
