import styled from "styled-components";

import { Breakpoints, ZIndices } from "lib/constants";

import { IWrapperProps } from "./props.interface";

import * as TextStyles from "../Text/styles";
import * as ButtonStyles from "../Button/styles";
import * as NavLinkStyles from "../NavLink/styles";

const Drawer = styled.div<IWrapperProps>`
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

  ${NavLinkStyles.NavLink} {
    margin-bottom: var(--spacing-8x);
  }

  ${ButtonStyles.Button}:first-of-type {
    align-self: flex-end;
    margin-bottom: var(--spacing-24x);
  }

  ${ButtonStyles.Button}:last-of-type {
    width: 100%;

    ${TextStyles.Text} {
      font-size: 14px;
    }
  }

  @media (min-width: ${Breakpoints.MOBILE.MAX}px) {
    width: 45%;
  }

  @media (min-width: ${Breakpoints.TABLET.MIN}px) {
    display: none;
  }
`;

export { Drawer };
