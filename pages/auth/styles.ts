import styled from "styled-components";

import { IFormWrapperProps } from "./props.interface";

import * as TextStyles from "components/Text/styles";
import * as ButtonStyles from "components/Button/styles";

import { getColor } from "lib/utilities";

const FormWrapper = styled.form<IFormWrapperProps>`
  box-shadow: var(--shadow) ${getColor("SHADOW")};
  max-width: 540px;
  margin: 0 auto;
  padding: var(--spacing-8x) var(--spacing-16x);
  border-radius: var(--spacing-4x);
  background-color: ${getColor("DARK")};

  & > ${ButtonStyles.Button} {
    width: 120px;
    margin-bottom: var(--spacing-12x);

    ${TextStyles.Text} {
      margin-left: ${({ isLoading }) =>
        isLoading ? "var(--spacing-4x)" : "0"};
      font-size: 14px;
    }
  }
`;

const SwitchModeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  & > ${TextStyles.Text} {
    font-size: 14px;
    font-weight: var(--fw-thin);
    margin-right: var(--spacing-2x);
    text-align: left;
  }

  & > ${ButtonStyles.Button} ${TextStyles.Text} {
    color: ${getColor("PRIMARY")};
    font-size: 14px;
  }
`;

export { FormWrapper, SwitchModeWrapper };
