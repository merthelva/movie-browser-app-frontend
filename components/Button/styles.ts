import styled, { css } from "styled-components";

import { IWrapperProps } from "./props.interface";

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
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

const secondaryStyle = css`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
`;

const dangerStyle = css`
  background-color: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.white};
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

export const Wrapper = styled.button<IWrapperProps>`
  font-weight: var(--fw-semi);
  border-radius: 4px;
  ${({ size }) => ButtonSizeStyles[size]};
  ${({ kind }) => ButtonTypeStyles[kind]};

  &:disabled {
    cursor: not-allowed;
  }
`;
