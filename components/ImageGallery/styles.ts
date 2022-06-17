import styled from "styled-components";

import * as ButtonStyles from "../Button/styles";

import { Breakpoints } from "lib/constants";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 160px;
  background-color: inherit;
  width: 100%;

  ${ButtonStyles.Button} {
    position: absolute;
    z-index: 3;
  }

  ${ButtonStyles.Button}:first-of-type {
    left: -8px;
  }

  ${ButtonStyles.Button}:last-of-type {
    right: -8px;
  }

  @media (min-width: 425px) {
    height: 220px;
  }

  @media (min-width: 620px) {
    height: 280px;
  }

  @media (min-width: ${Breakpoints.TABLET.MIN}px) {
    height: 320px;
  }
`;

export const DisplayedImage = styled.div`
  position: relative;
  width: 92%;
  height: 160px;
  margin: auto;

  @media (min-width: 425px) {
    height: 220px;
  }

  @media (min-width: 620px) {
    height: 280px;
  }

  @media (min-width: ${Breakpoints.TABLET.MIN}px) {
    height: 320px;
  }
`;
