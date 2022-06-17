import React, { useEffect, useRef } from "react";

import * as S from "./styles";
import { IProps } from "./props.interface";

import Icon from "../Icon";
import Button from "../Button";

import {
  ButtonSize,
  ButtonType,
  Colors,
  InputSize,
  InputType,
  InputVariants,
  SvgIcon,
} from "lib/constants";

const Input: React.FC<IProps> = ({
  errorMsg = null,
  hasClear = false,
  id,
  isAutoFocused = false,
  label = null,
  placeholder = "",
  size = InputSize.SMALL,
  type = InputType.TEXT,
  variant = InputVariants.LIGHT,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleClearInput = (e: React.FormEvent) => {
    e.preventDefault();
    props.handleClearInput && props.handleClearInput(id);
  };

  const inputProps = {
    hasError: !!errorMsg,
    id,
    name: id,
    placeholder,
    size,
    type,
    ...props,
  };

  useEffect(() => {
    if (isAutoFocused) {
      if (type === InputType.RICH_TEXT) {
        textAreaRef.current?.focus();
      } else {
        inputRef.current?.focus();
      }
    }
  }, [isAutoFocused, type]);

  return (
    <S.Wrapper>
      <S.InputWrapper size={size}>
        {label && (
          <S.LabelWrapper>
            <S.Label htmlFor={id}>{label}</S.Label>
            {errorMsg && (
              <Icon color={Colors.ERROR} name={SvgIcon.ERROR} size={14} />
            )}
          </S.LabelWrapper>
        )}
        {type === InputType.RICH_TEXT ? (
          <S.TextArea ref={textAreaRef} rows={4} {...inputProps} />
        ) : (
          <S.Input
            hasClear={hasClear}
            ref={inputRef}
            variant={variant}
            {...inputProps}
          />
        )}
        {hasClear && (
          <S.ClearButtonWrapper size={size}>
            <Button
              kind={ButtonType.GHOST}
              size={ButtonSize.NOSPACE}
              onClick={handleClearInput}
            >
              <Icon
                color={Colors.PRIMARY}
                name={SvgIcon.CANCEL_FILLED}
                size={14}
              />
            </Button>
          </S.ClearButtonWrapper>
        )}
      </S.InputWrapper>
      {errorMsg && <S.ErrorMessage>{errorMsg}</S.ErrorMessage>}
    </S.Wrapper>
  );
};

export default Input;
