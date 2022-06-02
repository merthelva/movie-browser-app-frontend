import styled, { css } from "styled-components";

import { IWrapperProps, ISvgProps } from "./props.interface";

import { IconSize } from "lib/constants";

const smallStyle = css`
  min-width: 12px;
  min-height: 12px;
`;

const mediumStyle = css`
  min-width: 18px;
  min-height: 18px;
`;

const largeStyle = css`
  min-width: 24px;
  min-height: 24px;
`;

const xlargeStyle = css`
  min-width: 30px;
  min-height: 30px;
`;

const IconSizeStyles = {
  [IconSize.SMALL]: smallStyle,
  [IconSize.MEDIUM]: mediumStyle,
  [IconSize.LARGE]: largeStyle,
  [IconSize.XLARGE]: xlargeStyle,
};

const Wrapper = styled.div<IWrapperProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ format }) =>
    format ? IconSizeStyles[format] : IconSizeStyles[IconSize.LARGE]};
`;

const Svg = styled.svg<ISvgProps>`
  fill: currentColor;
  width: ${({ size }) => (size ? `${size}px` : "28px")};
  height: ${({ size }) => (size ? `${size}px` : "28px")};

  ${({ isSpinning }) =>
    isSpinning &&
    css`
      animation: 1.5s loading linear infinite;

      @keyframes loading {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}
`;

const Path = styled.path``;

export { Svg, Path, Wrapper };
