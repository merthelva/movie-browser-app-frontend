import styled, { css } from "styled-components";

import { IWrapperProps } from "./props.interface";

import * as TextStyles from "../Text/styles";

import { NotificationType, ZIndices } from "lib/constants";

const errorStyle = css`
  border-left: 14px solid ${({ theme }) => theme.colors.error};
`;

const warningStyle = css`
  border-left: 14px solid ${({ theme }) => theme.colors.warning};
`;

const successStyle = css`
  border-left: 14px solid ${({ theme }) => theme.colors.success};
`;

const infoStyle = css`
  border-left: 14px solid ${({ theme }) => theme.colors.info};
`;

const NotificationTypeStyles = {
  [NotificationType.ERROR]: errorStyle,
  [NotificationType.WARNING]: warningStyle,
  [NotificationType.SUCCESS]: successStyle,
  [NotificationType.INFO]: infoStyle,
};

export const Wrapper = styled.div<IWrapperProps>`
  position: absolute;
  top: 32px;
  transform: ${({ isActive }) =>
    isActive ? "translateX(6%)" : " translateX(-100%)"};
  display: flex;
  align-items: flex-start;
  padding: var(--spacing-8x) var(--spacing-4x);
  min-width: 200px;
  max-width: 320px;
  min-height: 50px;
  border-radius: 4px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.light};
  z-index: ${ZIndices.NOTIFICATION};
  transition: transform 0.35s linear;
  ${({ kind }) => (kind ? NotificationTypeStyles[kind] : errorStyle)};

  ${TextStyles.Text} {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.secondary};
    margin-left: var(--spacing-2x);
    text-align: left;
  }
`;
