import styled from "styled-components";

import Button from "../Button";

import { Breakpoints } from "lib/constants";

const DrawerButton = styled(Button)`
  @media (min-width: ${Breakpoints.TABLET.MIN}px) {
    display: none;
  }
`;

export { DrawerButton };
