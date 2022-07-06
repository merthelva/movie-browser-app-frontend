import styled from "styled-components";

import * as TextStyles from "../Text/styles";

import { getColor } from "lib/utilities";

const CharacterDetail = styled.div`
  min-height: 300px;
  width: 150px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 75px;
  padding: var(--spacing-2x);
  background-color: ${getColor("GRAY500")};

  ${TextStyles.Text}:first-of-type {
    font-weight: var(--fw-semi);
  }

  ${TextStyles.Text}:last-of-type {
    font-size: 14px;
    font-weight: var(--fw-thin);
  }
`;

const ImageWrapper = styled.div`
  font-size: 0;
`;

export { CharacterDetail, Details, ImageWrapper };
