import styled, { css } from "styled-components";

import * as TextStyles from "../Text/styles";

import { Breakpoints } from "lib/constants";

const flexStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Wrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  padding: var(--spacing-8x);
  border: 1px solid #fff;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: var(--shadow) ${({ theme }) => theme.colors.shadow};
  overflow: hidden;
  min-height: 180px;
`;

export const Header = styled.div`
  ${flexStyle};
  flex: 1;

  & > ${TextStyles.Text} {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: var(--fw-bolder);
    font-size: 20px;
    text-align: left;
    line-height: 1.3;
    margin-right: var(--spacing-4x);

    @media (min-width: ${Breakpoints.MOBILE.MAX - 15}px) {
      max-width: 65%;
    }
  }
`;

export const Footer = styled.div`
  ${flexStyle};
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-4x);

  ${TextStyles.Text} {
    font-size: 14px;
    font-weight: var(--fw-semi);
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (min-width: 480px) and (max-width: 599px) {
    flex-direction: row;
  }
`;
