import styled from "styled-components";

import * as TextStyles from "components/Text/styles";
import * as ButtonStyles from "components/Button/styles";

import { IFormWrapperProps } from "./props.interface";

export const FormWrapper = styled.form<IFormWrapperProps>`
  box-shadow: var(--shadow) ${({ theme }) => theme.colors.shadow};
  max-width: 540px;
  margin: 0 auto;
  padding: var(--spacing-8x) var(--spacing-16x);
  border-radius: var(--spacing-4x);
  background-color: ${({ theme }) => theme.colors.dark};

  & > ${ButtonStyles.Wrapper} {
    width: 120px;
    margin-bottom: var(--spacing-12x);

    ${TextStyles.Text} {
      margin-left: ${({ isLoading }) =>
        isLoading ? "var(--spacing-4x)" : "0"};
    }
  }
`;

export const SwitchModeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > ${TextStyles.Text} {
    font-size: 14px;
    font-weight: var(--fw-thin);
    margin-right: var(--spacing-2x);
  }

  & > ${ButtonStyles.Wrapper} ${TextStyles.Text} {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
