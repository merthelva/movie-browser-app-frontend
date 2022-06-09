import styled from "styled-components";

import { Breakpoints } from "lib/constants";

export const Wrapper = styled.button`
  @media (min-width: ${Breakpoints.TABLET.MIN}px) {
    display: none;
  }
`;
