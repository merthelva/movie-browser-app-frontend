import styled from "styled-components";

import * as TextStyles from "../Text/styles";

const MovieRate = styled.div`
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};

  ${TextStyles.Text} {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: var(--fw-bold);
  }
`;

export { MovieRate };
