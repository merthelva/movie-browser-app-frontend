import styled, { css } from "styled-components";

import { IWrapperProps } from "./props.interface";

import * as TextStyles from "../Text/styles";

import { getColor } from "lib/utilities";
import { NotificationType, ZIndices } from "lib/constants";

const errorStyle = css`
  border-left: 14px solid ${getColor("ERROR")};
`;

const warningStyle = css`
  border-left: 14px solid ${getColor("WARNING")};
`;

const successStyle = css`
  border-left: 14px solid ${getColor("SUCCESS")};
`;

const infoStyle = css`
  border-left: 14px solid ${getColor("INFO")};
`;

const NotificationTypeStyles = {
  [NotificationType.ERROR]: errorStyle,
  [NotificationType.WARNING]: warningStyle,
  [NotificationType.SUCCESS]: successStyle,
  [NotificationType.INFO]: infoStyle,
};

const Notification = styled.div<IWrapperProps>`
  position: absolute;
  top: 32px;
  transform: ${({ isActive }) =>
    isActive ? "translateX(6%)" : " translateX(-100%)"};
  display: flex;
  align-items: flex-start;
  padding: var(--spacing-8x) var(--spacing-4x);
  min-width: 200px;
  max-width: 280px;
  min-height: 50px;
  border-radius: 4px;
  overflow: hidden;
  background-color: ${getColor("LIGHT")};
  z-index: ${ZIndices.NOTIFICATION};
  transition: transform 0.35s linear;
  ${({ kind }) => (kind ? NotificationTypeStyles[kind] : errorStyle)};

  ${TextStyles.Text} {
    font-size: 14px;
    color: ${getColor("SECONDARY")};
    margin-left: var(--spacing-2x);
    text-align: left;
  }
`;

export { Notification };
