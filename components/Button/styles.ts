import styled, { css } from "styled-components";

import { IWrapperProps } from "./props.interface";

import { getColor } from "lib/utilities";
import { ButtonSize, ButtonType } from "lib/constants";

const noSpaceStyle = css`
  padding: 0;
  height: min-content;
`;

const smallStyle = css`
  height: 32px;
  padding: 0 var(--spacing-8x);
`;

const mediumStyle = css`
  height: 40px;
  padding: 0 var(--spacing-12x);
`;

const largeStyle = css`
  height: 48px;
  padding: 0 var(--spacing-16x);
`;

const blockStyle = css`
  height: 64px;
  display: block;
  width: 100%;
`;

const ghostStyle = css``;

const primaryStyle = css`
  background-color: ${getColor("PRIMARY")};
  color: ${getColor("WHITE")};
`;

const secondaryStyle = css`
  background-color: ${getColor("DARK")};
  color: ${getColor("WHITE")};
`;

const dangerStyle = css`
  background-color: ${getColor("ERROR")};
  color: ${getColor("WHITE")};
`;

const ButtonSizeStyles = {
  [ButtonSize.SMALL]: smallStyle,
  [ButtonSize.MEDIUM]: mediumStyle,
  [ButtonSize.LARGE]: largeStyle,
  [ButtonSize.BLOCK]: blockStyle,
  [ButtonSize.NOSPACE]: noSpaceStyle,
};

const ButtonTypeStyles = {
  [ButtonType.GHOST]: ghostStyle,
  [ButtonType.PRIMARY]: primaryStyle,
  [ButtonType.SECONDARY]: secondaryStyle,
  [ButtonType.DANGER]: dangerStyle,
};

const Button = styled.button<IWrapperProps>`
  font-weight: var(--fw-bold);
  font-size: 14px;
  border-radius: 4px;
  ${({ size }) => ButtonSizeStyles[size]};
  ${({ kind }) => ButtonTypeStyles[kind]};

  &:disabled {
    cursor: not-allowed;
  }
`;

export { Button };
