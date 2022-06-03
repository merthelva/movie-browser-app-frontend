import styled from "styled-components";

import { ZIndices } from "lib/constants";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${ZIndices.BACKDROP};
  background-color: #00000080;
`;
