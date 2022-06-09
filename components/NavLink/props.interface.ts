import { Colors } from "lib/constants";

export interface IProps {
  onCloseDrawer?: VoidFunction;
  prefixIcon?: {
    name: string;
    color: Colors;
    size: number;
  };
  text: string;
  to: string;
}
