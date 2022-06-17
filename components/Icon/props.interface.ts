import { Colors, IconSize } from "lib/constants";

export interface IProps {
  name: string;
  color?: Colors;
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
