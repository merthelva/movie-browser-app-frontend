import { IconSize } from "lib/constants";

export interface IIconProps {
  name: string;
  format?: IconSize;
  isSpinning?: boolean;
  size?: number;
}

export interface IWrapperProps {
  format?: IconSize;
}

export interface ISvgProps {
  size?: number;
  isSpinning?: boolean;
}
