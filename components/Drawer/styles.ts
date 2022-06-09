import styled from "styled-components";

import { ZIndices } from "lib/constants";

import { IProps } from "./props.interface";

export const Wrapper = styled.div<IProps>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  bottom: 0;
  z-index: ${ZIndices.DRAWER};
  transition: right 0.25s linear;

  width: 70%;
  background-color: ${({ theme }) => theme.colors.light};
`;
