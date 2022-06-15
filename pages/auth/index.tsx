import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import * as S from "./styles";
import { IFieldSetterMap } from "./props.interface";

import { useAppDispatch, useAppSelector } from "hooks";
import { Button, Input, Spinner, Text } from "components";
import {
  AuthMode,
  ButtonSize,
  ButtonType,
  Colors,
  FormFields,
  InputSize,
  InputType,
  Status,
} from "lib/constants";
import { UserActions } from "store/slices/user";
import { UserSelectors } from "store/slices/user";

// TODO: VERY IMPORTANT!!! After logging a user out and logging with another user in, "userId" cookie is NOT updated and it remains as the previous value!!

const AuthPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const status = useAppSelector(UserSelectors.makeSelectUserStatus);
  const errorMessages = useAppSelector(UserSelectors.makeSelectUserError);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const fieldSetterMap: IFieldSetterMap = {
    email: setEmail,
    password: setPassword,
    confirmPassword: setConfirmPassword,
  };

  const [authMode, setAuthMode] = useState(AuthMode.SIGNUP);

  const handleInputValueChange = (event: React.FormEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    fieldSetterMap[name](value);
  };

  const handleClearInputValue = (id: string) => fieldSetterMap[id]("");

  const handleSwitchAuthMode = (event: React.FormEvent) => {
    event.preventDefault();
    setAuthMode((prevState: AuthMode) => {
      if (prevState === AuthMode.SIGNUP) {
        router.replace("/auth", "/auth/login");
        return AuthMode.LOGIN;
      }
      router.replace("/auth", "/auth/signup");
      return AuthMode.SIGNUP;
    });
  };

  const handleAuthFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (authMode === AuthMode.LOGIN) {
      dispatch(
        UserActions.loginRequest({
          email,
          password,
        })
      );
    } else {
      dispatch(
        UserActions.signupRequest({
          email,
          password,
          confirmPassword,
        })
      );
    }
  };

  useEffect(() => {
    if (status === Status.LOADED) {
      router.replace("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <S.FormWrapper isLoading={status === Status.LOADING}>
      <Input
        id="email"
        errorMsg={errorMessages?.[FormFields.EMAIL]?.message}
        hasClear={email !== ""}
        handleClearInput={handleClearInputValue}
        //isAutoFocused
        label="Email"
        onChange={handleInputValueChange}
        placeholder="john@doe.com"
        size={InputSize.MEDIUM}
        type={InputType.EMAIL}
        value={email}
      />
      <Input
        id="password"
        errorMsg={errorMessages?.[FormFields.PASSWORD]?.message}
        hasClear={password !== ""}
        handleClearInput={handleClearInputValue}
        label="Password"
        onChange={handleInputValueChange}
        size={InputSize.MEDIUM}
        type={InputType.PASSWORD}
        value={password}
      />
      {authMode === AuthMode.SIGNUP && (
        <Input
          id="confirmPassword"
          errorMsg={errorMessages?.[FormFields.CONFIRM_PASSWORD]?.message}
          hasClear={confirmPassword !== ""}
          handleClearInput={handleClearInputValue}
          label="Confirm Password"
          onChange={handleInputValueChange}
          size={InputSize.MEDIUM}
          type={InputType.PASSWORD}
          value={confirmPassword}
        />
      )}
      <Button
        kind={ButtonType.PRIMARY}
        size={ButtonSize.MEDIUM}
        onClick={handleAuthFormSubmit}
      >
        {status === Status.LOADING && <Spinner size={16} color={Colors.DARK} />}
        <Text>{authMode === AuthMode.SIGNUP ? "SIGNUP" : "LOGIN"}</Text>
      </Button>
      <S.SwitchModeWrapper>
        <Text>Already have an account? </Text>
        <Button
          kind={ButtonType.GHOST}
          size={ButtonSize.NOSPACE}
          onClick={handleSwitchAuthMode}
        >
          <Text>{authMode === AuthMode.SIGNUP ? "Login" : "Signup"}</Text>
        </Button>
      </S.SwitchModeWrapper>
    </S.FormWrapper>
  );
};

export default AuthPage;
