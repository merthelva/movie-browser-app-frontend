import React, { useEffect, useRef } from "react";

import * as S from "./styles";

import { IProps } from "./props.interface";

import {
  ButtonSize,
  ButtonType,
  Colors,
  InputSize,
  InputType,
  SvgIcon,
} from "lib/constants";

import Icon from "../Icon";
import Button from "../Button";

const Input: React.FC<IProps> = ({
  alignment = "vertical",
  errorMsg = null,
  hasClear = false,
  id,
  isAutoFocused = false,
  label,
  placeholder = "",
  size = InputSize.SMALL,
  type = InputType.TEXT,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClearInput = (e: React.FormEvent) => {
    e.preventDefault();
    inputRef.current!.value = "";
  };

  const inputProps = {
    hasClear,
    hasError: !!errorMsg,
    id,
    name: id,
    placeholder,
    size,
    type,
  };

  useEffect(() => {
    if (isAutoFocused) {
      inputRef.current?.focus();
    }
  }, [isAutoFocused]);

  return (
    <S.Wrapper>
      <S.InputWrapper alignment={alignment} size={size}>
        <S.LabelWrapper alignment={alignment}>
          <S.Label htmlFor={id}>{label}</S.Label>
          {errorMsg && (
            <Icon color={Colors.ERROR} name={SvgIcon.ERROR} size={14} />
          )}
        </S.LabelWrapper>
        {type === InputType.RICH_TEXT ? (
          <S.TextArea rows={4} {...inputProps} />
        ) : (
          <S.Input ref={inputRef} {...inputProps} />
        )}
        {hasClear && (
          <Button
            kind={ButtonType.GHOST}
            size={ButtonSize.NOSPACE}
            onClick={() => {}}
          >
            <Icon
              color={Colors.PRIMARY}
              name={SvgIcon.CANCEL_FILLED}
              size={14}
            />
          </Button>
        )}
      </S.InputWrapper>
      {errorMsg && <S.ErrorMessage>{errorMsg}</S.ErrorMessage>}
    </S.Wrapper>
  );
};

export default Input;
