import styled from "styled-components";

import Button from "../Button";

import { Breakpoints } from "lib/constants";

export const Wrapper = styled(Button)`
  @media (min-width: ${Breakpoints.TABLET.MIN}px) {
    display: none;
  }
`;
