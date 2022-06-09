import styled from "styled-components";

export const FormWrapper = styled.form`
  box-shadow: var(--shadow) ${({ theme }) => theme.colors.shadow};
  max-width: 540px;
  margin: 0 auto;
  padding: var(--spacing-8x) var(--spacing-16x);
  border-radius: var(--spacing-4x);
  background-color: ${({ theme }) => theme.colors.dark};
`;
