import styled from "styled-components";
import { Breakpoints, ZIndices } from "lib/constants";

import * as TextStyles from "../Text/styles";
import * as ContainerStyles from "../Container/styles";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${ZIndices.HEADER};
  height: 60px;
  padding: 0 var(--spacing-8x);
  background-color: ${({ theme }) => theme.colors.light};

  ${ContainerStyles.Wrapper} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  ${TextStyles.Text} {
    display: none;
  }

  @media (min-width: ${Breakpoints.TABLET.MIN}px) {
    ${TextStyles.Text} {
      display: inline-block;
      margin-left: var(--spacing-4x);
      font-family: "Acme", sans-serif;
      font-size: 24px;
      font-weight: var(--fw-bolder);
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const NavLinksWrapper = styled.div`
  display: none;

  @media (min-width: ${Breakpoints.TABLET.MIN}px) {
    display: flex;
    align-items: center;

    & > * {
      margin: 0 0 0 var(--spacing-4x);
    }
  }
`;
