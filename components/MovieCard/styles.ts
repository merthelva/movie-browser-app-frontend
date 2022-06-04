import Image from "next/image";
import styled from "styled-components";

import * as TextStyles from "../Text/styles";
import * as RateStyles from "../MovieRate/styles";

export const Wrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 640px;
  box-shadow: var(--shadow) ${({ theme }) => theme.colors.shadow};
  background-color: ${({ theme }) => theme.colors.dark};

  & > span {
    height: 500px !important;
  }
`;

export const Poster = styled(Image)`
  object-position: center;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 140px;
  padding: var(--spacing-8x);

  ${RateStyles.Wrapper} {
    align-self: flex-start;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
  margin-right: var(--spacing-8x);

  ${TextStyles.Text}:first-child {
    font-weight: var(--fw-bold);
  }

  ${TextStyles.Text}:last-child {
    font-size: 14px;
  }
`;
