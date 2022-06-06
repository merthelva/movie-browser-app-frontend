import styled, { css } from "styled-components";

import { IWrapperProps } from "./props.interface";

import { ButtonSize, ButtonType } from "lib/constants";

const noSpaceStyle = css`
  padding: var(--spacing-4x) 0;
`;

const smallStyle = css`
  padding: var(--spacing-4x) var(--spacing-8x);
`;

const mediumStyle = css`
  padding: var(--spacing-6x) var(--spacing-12x);
`;

const largeStyle = css`
  padding: var(--spacing-8x) var(--spacing-16x);
`;

const blockStyle = css`
  padding: var(--spacing-12x) 0;
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
