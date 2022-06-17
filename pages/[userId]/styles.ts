import styled from "styled-components";

import { Breakpoints } from "lib/constants";

import * as TextStyles from "components/Text/styles";

export const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-content: stretch;
  gap: var(--spacing-8x);
  max-width: 840px;
  margin: 0 auto;

  @media (min-width: ${Breakpoints.TABLET_MINI.MIN + 24}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const NoMovieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${TextStyles.Text} {
    font-size: 18px;
    font-weight: var(--fw-bold);
    color: ${({ theme }) => theme.colors.warning};
    margin-left: var(--spacing-4x);
    text-align: left;
  }
`;