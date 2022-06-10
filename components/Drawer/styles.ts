import styled from "styled-components";

import { Breakpoints, ZIndices } from "lib/constants";

import { IWrapperProps } from "./props.interface";

import * as ButtonStyles from "../Button/styles";

export const Wrapper = styled.div<IWrapperProps>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: ${ZIndices.DRAWER};
  transition: right 0.25s linear;
  padding: var(--spacing-24x) var(--spacing-8x) var(--spacing-12x);
  width: 70%;
  background-color: ${({ theme }) => theme.colors.light};

  ${ButtonStyles.Wrapper}:first-of-type {
    align-self: flex-end;
    margin-bottom: var(--spacing-24x);
  }

  ${ButtonStyles.Wrapper}:last-of-type {
    margin-top: var(--spacing-8x);
    width: 100%;
  }

  @media (min-width: ${Breakpoints.MOBILE.MAX}px) {
    width: 45%;
  }

  @media (min-width: ${Breakpoints.TABLET.MIN}px) {
    display: none;
  }
`;
