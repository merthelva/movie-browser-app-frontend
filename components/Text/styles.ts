import styled from "styled-components";

const Text = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.5;
`;

const Paragraph = styled.p``;

export { Text, Paragraph };
