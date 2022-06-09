import styled, { css } from "styled-components";

import { IInputProps, IWrapperProps } from "./props.interface";

import * as ButtonStyles from "../Button/styles";

const baseInputStyles = css`
  border-radius: 4px;
  padding: var(--spacing-4x);
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.light};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: var(--spacing-8x);
`;

export const InputWrapper = styled.div<IWrapperProps>`
  position: relative;
  display: flex;
  flex-direction: ${({ alignment }) =>
    alignment === "horizontal" ? "row" : "column"};
  margin-bottom: var(--spacing-2x);
  width: 100%;

  & > ${ButtonStyles.Wrapper} {
    position: absolute;
    bottom: ${({ size }) => (size ? size / 2 - 12 : 12)}px;
    right: 0;
  }
`;

export const LabelWrapper = styled.div<IWrapperProps>`
  display: flex;
  align-items: center;
  margin-bottom: ${({ alignment }) =>
    alignment === "horizontal" ? "0" : "var(--spacing-2x)"};
  margin-right: var(--spacing-2x);
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: var(--fw-thin);
  color: ${({ theme }) => theme.colors.light};
  margin-right: var(--spacing-2x);
`;

export const Input = styled.input<IInputProps>`
  ${baseInputStyles};
  border: 1px solid
    ${({ hasError, theme }) =>
      hasError ? theme.colors.error : theme.colors.white};
  height: ${({ size }) => size || 32}px;
`;

export const TextArea = styled.textarea<IInputProps>`
  ${baseInputStyles};
  resize: none;
  border: 1px solid
    ${({ hasError, theme }) =>
      hasError ? theme.colors.error : theme.colors.white};
`;

export const ErrorMessage = styled.span`
  font-weight: var(--fw-semi);
  font-size: 14px;
  color: ${({ theme }) => theme.colors.error};
`;