import styled from "styled-components";

import * as TextStyles from "../Text/styles";

export const Wrapper = styled.div`
  min-height: 300px;
  width: 150px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 75px;
  padding: var(--spacing-2x);
  background-color: ${({ theme }) => theme.colors.gray500};

  ${TextStyles.Text}:first-of-type {
    font-weight: var(--fw-semi);
  }

  ${TextStyles.Text}:last-of-type {
    font-size: 14px;
    font-weight: var(--fw-thin);
  }
`;

export const ImageWrapper = styled.div`
  font-size: 0;
`;