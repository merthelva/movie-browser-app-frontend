import styled from "styled-components";

import { getColor } from "lib/utilities";

const Text = styled.span`
  display: inline-block;
  color: ${getColor("WHITE")};
  line-height: 1.5;
`;

const Paragraph = styled.p``;

export { Text, Paragraph };
