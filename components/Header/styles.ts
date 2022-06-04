import styled from "styled-components";

import { ZIndices } from "lib/constants";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${ZIndices.HEADER};
  height: 60px;
  padding: 0 var(--spacing-8x);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light};
`;
