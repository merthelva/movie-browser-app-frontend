import styled, { css } from "styled-components";

const barStyles = css`
  display: inline-block;
  width: 24px;
  height: 4px;
  border-radius: 1px;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const Wrapper = styled.button``;

export const Bar = styled.span`
  position: relative;
  ${barStyles};

  &::before {
    position: absolute;
    content: "";
    top: -8px;
    left: 0;

    ${barStyles};
  }

  &::after {
    position: absolute;
    content: "";
    top: 8px;
    left: 0;

    ${barStyles};
  }
`;
