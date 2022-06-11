import styled, { keyframes } from "styled-components";

import { IWrapper } from "./props.interface";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.span<IWrapper>`
  display: inline-block;
  /* border: 2px solid ${({ theme }) => theme.colors.light};
  border-top: 2px solid ${({ color }) => color}; */
  border: ${({ theme, thickness }) =>
    `${thickness}px solid ${theme.colors.light}`};
  border-top: ${({ color, thickness }) => `${thickness}px solid ${color}`};
  border-radius: 50%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  animation: ${spin} 2s linear infinite;
`;
