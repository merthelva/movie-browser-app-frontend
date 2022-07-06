import styled, { keyframes } from "styled-components";

import { IWrapperProps } from "./props.interface";

import { getColor } from "lib/utilities";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.span<IWrapperProps>`
  display: inline-block;
  border: ${({ thickness }) => `${thickness}px solid ${getColor("LIGHT")}`};
  border-top: ${({ color, thickness }) => `${thickness}px solid ${color}`};
  border-radius: 50%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  animation: ${spin} 2s linear infinite;
`;

export { Spinner };
