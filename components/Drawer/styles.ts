import styled from "styled-components";

import { ZIndices } from "lib/constants";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: ${ZIndices.DRAWER};

  width: 70%;
  background-color: ${({ theme }) => theme.colors.light};
`;
