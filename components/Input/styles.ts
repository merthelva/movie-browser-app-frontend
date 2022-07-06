import styled, { css } from "styled-components";

import { IInputProps, IWrapperProps } from "./props.interface";

import { getColor } from "lib/utilities";
import { InputVariants } from "lib/constants";

const baseInputStyles = css`
  border-radius: 4px;
  padding: var(--spacing-4x);

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    color: ${getColor("GRAY500")};
  }
`;

const transparentStyle = css`
  background-color: transparent;
  color: inherit;
`;

const lightStyle = css`
  background-color: ${getColor("LIGHT")};
  color: ${getColor("DARK")};
`;

const darkStyle = css`
  background-color: ${getColor("DARK")};
  color: ${getColor("LIGHT")};
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

const ToggleVisibilityButtonWrapper = styled.div<IWrapperProps>`
  position: absolute;
  bottom: ${({ size }) => (size ? size / 2 - 12 : 4)}px;
  right: ${({ hasValue }) =>
    hasValue ? "var(--spacing-14x)" : "var(--spacing-2x)"};
  transition: right 0.25s;
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
  color: ${getColor("LIGHT")};
  margin-right: var(--spacing-2x);
`;

const Input = styled.input<IInputProps>`
  ${baseInputStyles};
  ${({ variant }) =>
    variant
      ? InputVariantStyles[variant]
      : InputVariantStyles[InputVariants.TRANSPARENT]};
  border: 1px solid
    ${({ hasError }) => (hasError ? getColor("ERROR") : getColor("WHITE"))};
  height: ${({ size }) => size || 32}px;
`;

const TextArea = styled.textarea<IInputProps>`
  ${baseInputStyles};
  resize: none;
  border: 1px solid
    ${({ hasError }) => (hasError ? getColor("ERROR") : getColor("WHITE"))};
`;

const ErrorMessage = styled.span`
  font-weight: var(--fw-semi);
  font-size: 14px;
  color: ${getColor("ERROR")};
`;

export {
  Wrapper,
  InputWrapper,
  ClearButtonWrapper,
  ToggleVisibilityButtonWrapper,
  LabelWrapper,
  Label,
  Input,
  TextArea,
  ErrorMessage,
};
