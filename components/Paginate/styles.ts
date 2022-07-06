import styled, { css } from "styled-components";

import { IPageNumberText } from "./props.interface";

import * as ButtonStyles from "../Button/styles";

import { getColor } from "lib/utilities";
import { Breakpoints } from "lib/constants";

const activePageNumberStyle = css`
  padding: var(--spacing-2x);
  background-color: ${getColor("PRIMARY")};
  color: ${getColor("DARK")};
  font-weight: var(--fw-bold);
  border-radius: 4px;
`;

const inactivePageNumberStyle = css`
  color: ${getColor("LIGHT")};
  font-weight: var(--fw-bold);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 450px;
  overflow-x: scroll;

  ${ButtonStyles.Button} {
    margin: 0 var(--spacing-6x);
  }

  @media (min-width: ${Breakpoints.MOBILE.MIN + 75}px) {
    justify-content: space-around;
  }

  @media (min-width: ${Breakpoints.MOBILE.MAX}px) {
    overflow-x: hidden;
  }
`;

const PageNumberText = styled.span<IPageNumberText>`
  ${({ isActive }) =>
    isActive ? activePageNumberStyle : inactivePageNumberStyle};
`;

export { Wrapper, Pagination, PageNumberText };
