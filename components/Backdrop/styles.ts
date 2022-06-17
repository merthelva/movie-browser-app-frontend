import styled, { css } from "styled-components";

import { IWrapperProps } from "./props.interface";

import { BackdropType, ZIndices } from "lib/constants";

const invisibleStyle = css`
  background-color: transparent;
`;

const transparentStyle = css`
  background-color: #00000080;
`;

const BackdropTypeStyles = {
  [BackdropType.INVISIBLE]: invisibleStyle,
  [BackdropType.TRANSPARENT]: transparentStyle,
};

export const Backdrop = styled.div<IWrapperProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${ZIndices.BACKDROP};

  ${({ type }) =>
    type
      ? BackdropTypeStyles[type]
      : BackdropTypeStyles[BackdropType.INVISIBLE]}
`;
