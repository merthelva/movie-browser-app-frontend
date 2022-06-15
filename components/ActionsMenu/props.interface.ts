import { Colors } from "lib/constants";

export interface IActionItem {
  id: string;
  name: string;
  icon: string;
  color: Colors;
}

export interface IProps {
  actionItems: IActionItem[];
  actionHandlers: ((args: any) => void)[];
  isActive?: boolean;
  isProcessing?: boolean;
  onClose: VoidFunction;
}

export interface IWrapperProps {
  isActive?: boolean;
}
