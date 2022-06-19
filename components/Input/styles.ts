import styled, { css } from "styled-components";

import { IInputProps, IWrapperProps } from "./props.interface";

import { InputVariants } from "lib/constants";

const baseInputStyles = css`
  border-radius: 4px;
  padding: var(--spacing-4x);

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    color: currentColor;
  }
`;

const transparentStyle = css`
  background-color: transparent;
  color: inherit;
`;

const lightStyle = css`
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
`;

const darkStyle = css`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
`;

const InputVariantStyles = {
  [InputVariants.TRANSPARENT]: transparentStyle,
  [InputVariants.LIGHT]: lightStyle,
  [InputVariants.DARK]: darkStyle,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: var(--spacing-8x);
`;

const InputWrapper = styled.div<IWrapperProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-2x);
  width: 100%;
`;

const ClearButtonWrapper = styled.div<IWrapperProps>`
  position: absolute;
  bottom: ${({ size }) => (size ? size / 2 - 12 : 4)}px;
  right: var(--spacing-2x);
`;

const LabelWrapper = styled.div<IWrapperProps>`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-2x);
  margin-right: var(--spacing-2x);
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: var(--fw-thin);
  color: ${({ theme }) => theme.colors.light};
  margin-right: var(--spacing-2x);
`;

const Input = styled.input<IInputProps>`
  ${baseInputStyles};
  ${({ variant }) =>
    variant
      ? InputVariantStyles[variant]
      : InputVariantStyles[InputVariants.TRANSPARENT]};
  border: 1px solid
    ${({ hasError, theme }) =>
      hasError ? theme.colors.error : theme.colors.white};
  height: ${({ size }) => size || 32}px;
`;

const TextArea = styled.textarea<IInputProps>`
  ${baseInputStyles};
  resize: none;
  border: 1px solid
    ${({ hasError, theme }) =>
      hasError ? theme.colors.error : theme.colors.white};
`;

const ErrorMessage = styled.span`
  font-weight: var(--fw-semi);
  font-size: 14px;
  color: ${({ theme }) => theme.colors.error};
`;

export {
  Wrapper,
  InputWrapper,
  ClearButtonWrapper,
  LabelWrapper,
  Label,
  Input,
  TextArea,
  ErrorMessage,
};
