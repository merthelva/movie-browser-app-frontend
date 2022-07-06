import styled from "styled-components";

import * as TextStyles from "../Text/styles";

import { getColor } from "lib/utilities";

const MovieRate = styled.div`
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${getColor("PRIMARY")};
  background-color: ${getColor("SECONDARY")};

  ${TextStyles.Text} {
    color: ${getColor("PRIMARY")};
    font-weight: var(--fw-bold);
  }
`;

export { MovieRate };
