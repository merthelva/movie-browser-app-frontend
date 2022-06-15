import { NotificationType } from "lib/constants";

export interface IProps {
  isOpen?: boolean;
  kind?: NotificationType;
  notificationText: string;
}

export interface IWrapperProps {
  isActive?: boolean;
  kind?: NotificationType;
}
