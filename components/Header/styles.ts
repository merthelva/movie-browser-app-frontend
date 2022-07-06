import styled from "styled-components";

import * as TextStyles from "../Text/styles";
import * as ButtonStyles from "../Button/styles";
import * as ContainerStyles from "../Container/styles";

import { getColor } from "lib/utilities";
import { Breakpoints, ZIndices } from "lib/constants";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${ZIndices.HEADER};
  height: 60px;
  padding: 0 var(--spacing-8x);
  background-color: ${getColor("LIGHT")};

  ${ContainerStyles.Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  ${TextStyles.Text} {
    display: none;
  }

  @media (min-width: ${Breakpoints.MOBILE.MIN}px) {
    ${TextStyles.Text} {
      display: inline-block;
      margin-left: var(--spacing-4x);
      font-family: "Acme", sans-serif;
      font-size: 24px;
      font-weight: var(--fw-bolder);
      color: ${getColor("PRIMARY")};
    }
  }
`;

const NavLinksWrapper = styled.nav`
  display: none;

  & > ${ButtonStyles.Button} ${TextStyles.Text} {
    font-size: 14px;
  }

  @media (min-width: ${Breakpoints.TABLET.MIN}px) {
    display: flex;
    align-items: center;

    & > * {
      margin: 0 0 0 var(--spacing-8x);
    }
  }
`;

export { Header, LogoWrapper, NavLinksWrapper };
