import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

import * as S from "./styles";
import { IProps } from "./props.interface";

import { Colors, NotificationType, SvgIcon } from "lib/constants";

import Icon from "../Icon";
import Text from "../Text";

const Notification: React.FC<IProps> = ({
  isOpen = false,
  kind = NotificationType.ERROR,
  notificationText,
}) => {
  const [isActive, setIsActive] = useState<boolean>(!!isOpen);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isOpen) {
        setIsActive(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) setIsActive(true);
  }, [isOpen]);

  const notificationIcon = useMemo(() => {
    if (kind === NotificationType.ERROR)
      return <Icon name={SvgIcon.ERROR} color={Colors.ERROR} size={20} />;
    if (kind === NotificationType.WARNING)
      return <Icon name={SvgIcon.WARNING} color={Colors.WARNING} size={20} />;
    if (kind === NotificationType.INFO)
      return <Icon name={SvgIcon.INFO} color={Colors.INFO} size={20} />;
    if (kind === NotificationType.SUCCESS)
      return <Icon name={SvgIcon.SUCCESS} color={Colors.SUCCESS} size={20} />;
  }, [kind]);

  if (typeof window === "undefined") return null;

  const notificationSlot = document.querySelector("#notification")!;

  const notificationEl = (
    <S.Wrapper isActive={isActive} kind={kind}>
      {notificationIcon}
      <Text>{notificationText}</Text>
    </S.Wrapper>
  );

  return createPortal(notificationEl, notificationSlot);
};

export default Notification;
