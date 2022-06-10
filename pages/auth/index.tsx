import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import * as S from "./styles";
import formFields from "./util";

import { Button, Input, Text } from "components";
import {
  AuthMode,
  ButtonSize,
  ButtonType,
  InputFields,
  InputSize,
  InputType,
} from "lib/constants";

const AuthPage: NextPage = () => {
  const router = useRouter();

  // Here, instead of keeping each state in its respective "useState" call,
  // "useReducer" hook could be used, but it would complicate the case to handle
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [errorMessages, setErrorMessages] = useState({
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
  });

  const [authMode, setAuthMode] = useState(AuthMode.SIGNUP);

  const handleInputValueChange = (event: React.FormEvent) => {
    const { name, value } = event.target as HTMLInputElement;

    if (name === InputFields.PASSWORD) {
      setPassword(value);
      return;
    }

    if (name === InputFields.CONFIRM_PASSWORD) {
      setConfirmPassword(value);
      return;
    }

    setEmail(value);
  };

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

    try {
      // TODO: Create a dedicated axios instance for making auth related API requests.
      const axios = await (await import("axios")).default;

      const { data }: any = await axios.post(
        "http://localhost:4000/auth/signup",
        {
          email,
          password,
          confirmPassword,
        }
      );

      router.push("/");
      console.log(data);
    } catch (error: any) {
      const errors = error.response.data.reason;
      Object.keys(formFields).forEach((field: any, index: number) => {
        setErrorMessages((prevState) => {
          return {
            ...prevState,
            [field]: errors[index][field].message,
          };
        });
      });
    }
  };

  return (
    <S.FormWrapper isLoading={false}>
      <Input
        id="email"
        errorMsg={errorMessages.email}
        hasClear
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
        errorMsg={errorMessages.password}
        hasClear
        label="Password"
        onChange={handleInputValueChange}
        size={InputSize.MEDIUM}
        type={InputType.PASSWORD}
        value={password}
      />
      {authMode === AuthMode.SIGNUP && (
        <Input
          id="confirmPassword"
          errorMsg={errorMessages.confirmPassword}
          hasClear
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
