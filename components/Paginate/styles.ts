import styled from "styled-components";

import * as ButtonStyles from "../Button/styles";
import * as TextStyles from "../Text/styles";

export const Paginate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > ${TextStyles.Text} {
    padding: var(--spacing-2x) var(--spacing-4x);
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.dark};
    font-weight: var(--fw-bold);
    border-radius: 4px;
  }

  /* ${ButtonStyles.Button}:nth-of-type(2) {
    padding: var(--spacing-4x);
    background-color: ${({ theme }) => theme.colors.primary};

    ${TextStyles.Text} {
      color: ${({ theme }) => theme.colors.dark};
      font-weight: var(--fw-bold);
      font-size: 18px;
    }
  } */
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  ${TextStyles.Text} {
    font-weight: var(--fw-normal);
    color: ${({ theme }) => theme.colors.primary};
  }
`;
