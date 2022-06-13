import styled from "styled-components";

import { Breakpoints } from "lib/constants";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--spacing-12x);
  margin-bottom: var(--spacing-12x);

  @media (min-width: 414px) and (max-width: ${Breakpoints.MOBILE.MAX}px) {
    justify-content: center;
    grid-template-columns: 320px;
  }
`;
