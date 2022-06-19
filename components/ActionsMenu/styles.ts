import styled from "styled-components";

import { IWrapperProps } from "./props.interface";

import { ZIndices } from "lib/constants";

import * as TextStyles from "../Text/styles";
import * as ButtonStyles from "../Button/styles";

const ActionsMenu = styled.div<IWrapperProps>`
  position: absolute;
  top: 28px;
  right: 24px;
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: var(--spacing-4x);
  padding: var(--spacing-4x) var(--spacing-2x);
  min-width: 130px;
  border: 1px solid ${({ theme }) => theme.colors.gray500};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.light};
  transform: ${({ isActive }) =>
    isActive ? "scaleX(100%) scaleY(100%)" : "scaleX(0) scaleY(0)"};
  transform-origin: right top;
  transition: transform 0.35s;
  z-index: ${ZIndices.ACTIONS_MENU};
`;

const ActionItemWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;

  & > ${ButtonStyles.Button} {
    justify-content: flex-start;
    width: 100%;

    ${TextStyles.Text} {
      margin-left: var(--spacing-2x);
      color: ${({ theme }) => theme.colors.secondary};
      font-weight: var(--fw-semi);
    }
  }
`;

export { ActionsMenu, ActionItemWrapper };
