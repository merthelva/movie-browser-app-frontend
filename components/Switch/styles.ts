import styled from "styled-components";

import { IIndicatorProps } from "./props.interface";

export const Switch = styled.button<IIndicatorProps>`
  position: relative;
  width: 28px;
  height: 14px;
  outline: 3px solid ${({ theme }) => theme.colors.gray500};
  border-radius: 7px;
  background-color: ${({ theme, isToggled }) =>
    isToggled ? theme.colors.primary : theme.colors.light};
  transition: background-color 0.25s;
`;

export const Indicator = styled.span<IIndicatorProps>`
  position: absolute;
  left: ${({ isToggled }) => (isToggled ? "14px" : 0)};
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, isToggled }) =>
    !isToggled ? theme.colors.primary : theme.colors.light};
  transition: left 0.25s, background-color 0.25s;
`;
