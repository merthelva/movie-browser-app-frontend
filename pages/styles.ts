import styled from "styled-components";

import { Breakpoints } from "lib/constants";

import * as TextStyles from 'components/Text/styles'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--spacing-12x);
  margin-bottom: var(--spacing-12x);

  @media (min-width: 414px) and (max-width: ${Breakpoints.MOBILE.MAX}px) {
    justify-content: center;
    grid-template-columns: 320px;
  }
`;

const NoMovieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${TextStyles.Text} {
    font-size: 18px;
    font-weight: var(--fw-bold);
    color: ${({ theme }) => theme.colors.info};
    margin-left: var(--spacing-4x);
    text-align: left;
  }
`;

export { Wrapper, NoMovieContainer };
